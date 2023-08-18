public with sharing class CasesRecordsController {
    @AuraEnabled(cacheable=true)
    public static List<Case> getCasesRecords() {
        return [SELECT Id, CaseNumber, Client_Name__c, Status FROM Case LIMIT 3];
    }

 }