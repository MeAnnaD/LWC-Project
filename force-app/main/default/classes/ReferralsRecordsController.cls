public with sharing class ReferralsRecordsController {
    @AuraEnabled(cacheable=true)
    public static List<Referral__c> getReferralsRecords() {
        return [SELECT Id, Name, Referred_By__c, Referral_Status__c FROM Referral__c LIMIT 3];
    }
}