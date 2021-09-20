public
without sharing class registerLoanApplicant {

  /********************************************************************************************************
   *  @author          Ravvinder Singh
   *  @description     to create Account,Contact and Opportunity
   *  @param
   *  @date            Sep 19, 2021
   *********************************************************************************************************/

  @AuraEnabled public static String createLoanApplicant(String loanData) {
    String referenceId = '';
    if (String.isNotBlank(loanData)) {
      // Update the order record
      jsonDeserialize jsonObject =
          (jsonDeserialize) JSON.deserializeStrict(loanData, jsonDeserialize.class);

      final Account acc = new Account();
      final Contact con = new Contact();
      final Loan_Application__c loanApplication = new Loan_Application__c();

      acc.Name = jsonObject.FirstName;
      insert acc;

      con.FirstName = jsonObject.FirstName;
      con.LastName = jsonObject.LastName;
      con.Email = jsonObject.Email;
      try {
        con.Phone = jsonObject.Phone;
        con.Bank__c = jsonObject.Bank;
        con.IncomeType__c = jsonObject.IncomeType;
        con.Paycheck__c = jsonObject.Paycheck;
        con.Annual_Income__c = jsonObject.Salary;
        con.AccountId = acc.Id;

        insert con;

        /*loanApplication.Name__c = jsonObject.FirstName + jsonObject.LastName;*/
        loanApplication.Status__c = 'Applied';
        loanApplication.Close_Date__c = Date.parse('12/12/2021');
        loanApplication.Employer_Name__c = jsonObject.company;
        loanApplication.Loan_Duration__c = Decimal.valueOf(jsonObject.Duration);
        loanApplication.Loan_Type__c = jsonObject.LoanType;
        loanApplication.Amount__c = Decimal.valueOf(jsonObject.LoanAmount);
        loanApplication.Account__c = acc.Id;

        insert loanApplication;

        referenceId = [SELECT Name FROM Loan_Application__c WHERE Id =:loanApplication.Id][0].Name;

      } catch (DmlException de) {
        throw new AuraHandledException(de.getDmlMessage(0));
      }
    }
    return referenceId;
  }

  /********************************************************************************************************
   *  @author          Ravvinder Singh
   *  @description     to fetch loan application
   *  @param
   *  @date            Sep 19, 2021
   *********************************************************************************************************/

  @AuraEnabled(cacheable = true) public static list<Loan_Application__c> getLoanApplication(
      String applicationNumber) {
    List<Loan_Application__c> loandetails = new List<Loan_Application__c>();
    try {

      loandetails = [select Name,
                      Status__c,
                      Loan_Type__c,
                      Amount__c from Loan_Application__c where Name =:applicationNumber];

      return loandetails;
    } catch (QueryException e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
  public
  class jsonDeserialize {
    public
    String FirstName;
    public
    String DOB;
    public
    String Gender;
    public
    String Email;
    public
    String LastName;
    public
    String Phone;
    public
    String Bank;
    public
    String IncomeType;
    public
    String Paycheck;
    public
    String Salary;
    public
    String company;
    public
    String Duration;
    public
    String LoanType;
    public
    String LoanAmount;
    public
    String PostalCode;
  }
}