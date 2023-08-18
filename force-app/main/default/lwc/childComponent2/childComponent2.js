import { LightningElement, wire } from 'lwc';
import getReferralsRecords from '@salesforce/apex/ReferralsRecordsController.getReferralsRecords';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Referred By?', fieldName: 'Referred_By__c' },
    { label: 'Referral Status?', fieldName: 'Referral_Status__c' }
];

export default class ReferralsRecords extends LightningElement {
    columns = columns;

    @wire(getReferralsRecords)
    referralsRecords;
}
