import { LightningElement, wire } from 'lwc';
import getAppointmentRecords from '@salesforce/apex/AppointmentRecordsController.getAppointmentRecords';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Price', fieldName: 'Price__c' },
    { label: 'Date/Time', fieldName: 'Date_Time__c' }
];

export default class AppointmentRecords extends LightningElement {
    columns = columns;

    @wire(getAppointmentRecords)
    appointmentRecords;
}
