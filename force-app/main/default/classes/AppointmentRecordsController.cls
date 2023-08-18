public with sharing class AppointmentRecordsController {
    @AuraEnabled(cacheable=true)
    public static List<Appointments__c> getAppointmentRecords() {
        return [SELECT Id, Name, Date_Time__c, 	Price__c FROM Appointments__c LIMIT 3];
    }
}