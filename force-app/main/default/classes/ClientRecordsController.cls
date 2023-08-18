public with sharing class ClientRecordsController {
    @AuraEnabled(cacheable=true)
    public static List<Customer> getClientRecords() {
        return [SELECT Id, Name, Email_Address__c, Phone_Number__c FROM Customer];
    }
}
