<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Contact;
use App\Http\Resources\Contact as ContactResource;
use App\Http\Resources\ContactCollection;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Get contacts
        $contacts = Contact::all();
        // Return collection of contacts
        return new ContactCollection($contacts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //we validate data coming from the request first
        $request->validate([
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'email' => 'required|email',
            'job_title' => 'required',
            'city' => 'required',
            'country' => 'required',
        ]);

        //We check the type of the request if it's PUT then we modify the item if it's a post then we
        //create a new contact
        $contact = $request->isMethod('put') ? Contact::findOrFail($request->contact_id) : new Contact;

        //We are storing the inputed data from the request in our database
        $contact->id = $request->input('contact_id'); // only needed for the PUT method 
        $contact->first_name = $request->input('first_name');
        $contact->last_name = $request->input('last_name');
        $contact->email = $request->input('email');
        $contact->job_title = $request->input('job_title');
        $contact->city = $request->input('city');
        $contact->country = $request->input('country');

        //we save the the newly created contact on the DB and Return it as a new resource
        if($contact->save()) {
            return new ContactResource($contact);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Get a single contact
        $contact = Contact::findOrFail($id);
        // Return the single contact
        return new ContactResource($contact);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contact = Contact::findOrFail($id);
        if($contact->delete()){
            return new ContactResource($contact);
        }
    }
}
