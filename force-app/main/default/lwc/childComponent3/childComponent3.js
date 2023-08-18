import { LightningElement, wire } from 'lwc';
import getCasesRecords from '@salesforce/apex/CasesRecordsController.getCasesRecords';

const columns = [
    { label: 'Case Number', fieldName: 'CaseNumber' },
    { label: 'Client Name', fieldName: 'Client_Name__c' },
    { label: 'Status', fieldName: 'Status' }
];

export default class CasesRecords extends LightningElement {
    columns = columns;

    @wire(getCasesRecords)
    CasesRecords;
}