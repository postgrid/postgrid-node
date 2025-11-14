# AddressVerification

Types:

- <code><a href="./src/resources/address-verification.ts">Errors</a></code>
- <code><a href="./src/resources/address-verification.ts">Status</a></code>
- <code><a href="./src/resources/address-verification.ts">AddressVerificationVerifyResponse</a></code>

Methods:

- <code title="post /v1/addver/verifications">client.addressVerification.<a href="./src/resources/address-verification.ts">verify</a>({ ...params }) -> AddressVerificationVerifyResponse</code>

# IntlAddressVerification

Types:

- <code><a href="./src/resources/intl-address-verification.ts">IntlAddressVerificationVerifyResponse</a></code>

Methods:

- <code title="post /v1/intl_addver/verifications">client.intlAddressVerification.<a href="./src/resources/intl-address-verification.ts">verify</a>({ ...params }) -> IntlAddressVerificationVerifyResponse</code>

# PrintMail

Types:

- <code><a href="./src/resources/print-mail/print-mail.ts">ContactCreateWithCompanyName</a></code>
- <code><a href="./src/resources/print-mail/print-mail.ts">ContactCreateWithFirstName</a></code>

## BankAccounts

Types:

- <code><a href="./src/resources/print-mail/bank-accounts.ts">BankAccount</a></code>
- <code><a href="./src/resources/print-mail/bank-accounts.ts">BankAccountCountryCode</a></code>
- <code><a href="./src/resources/print-mail/bank-accounts.ts">BankAccountDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/bank_accounts">client.printMail.bankAccounts.<a href="./src/resources/print-mail/bank-accounts.ts">create</a>({ ...params }) -> BankAccount</code>
- <code title="get /print-mail/v1/bank_accounts/{id}">client.printMail.bankAccounts.<a href="./src/resources/print-mail/bank-accounts.ts">retrieve</a>(id) -> BankAccount</code>
- <code title="get /print-mail/v1/bank_accounts">client.printMail.bankAccounts.<a href="./src/resources/print-mail/bank-accounts.ts">list</a>({ ...params }) -> BankAccountsSkipLimit</code>
- <code title="delete /print-mail/v1/bank_accounts/{id}">client.printMail.bankAccounts.<a href="./src/resources/print-mail/bank-accounts.ts">delete</a>(id) -> BankAccountDeleteResponse</code>

## Campaigns

Types:

- <code><a href="./src/resources/print-mail/campaigns.ts">Campaign</a></code>
- <code><a href="./src/resources/print-mail/campaigns.ts">CampaignDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/campaigns">client.printMail.campaigns.<a href="./src/resources/print-mail/campaigns.ts">create</a>({ ...params }) -> Campaign</code>
- <code title="get /print-mail/v1/campaigns/{id}">client.printMail.campaigns.<a href="./src/resources/print-mail/campaigns.ts">retrieve</a>(id) -> Campaign</code>
- <code title="post /print-mail/v1/campaigns/{id}">client.printMail.campaigns.<a href="./src/resources/print-mail/campaigns.ts">update</a>(id, { ...params }) -> Campaign</code>
- <code title="get /print-mail/v1/campaigns">client.printMail.campaigns.<a href="./src/resources/print-mail/campaigns.ts">list</a>({ ...params }) -> CampaignsSkipLimit</code>
- <code title="delete /print-mail/v1/campaigns/{id}">client.printMail.campaigns.<a href="./src/resources/print-mail/campaigns.ts">delete</a>(id) -> CampaignDeleteResponse</code>
- <code title="post /print-mail/v1/campaigns/{id}/send">client.printMail.campaigns.<a href="./src/resources/print-mail/campaigns.ts">send</a>(id, { ...params }) -> Campaign</code>

## Cheques

Types:

- <code><a href="./src/resources/print-mail/cheques.ts">Cheque</a></code>
- <code><a href="./src/resources/print-mail/cheques.ts">ChequeSize</a></code>
- <code><a href="./src/resources/print-mail/cheques.ts">DigitalOnly</a></code>
- <code><a href="./src/resources/print-mail/cheques.ts">ChequeRetrieveURLResponse</a></code>

Methods:

- <code title="post /print-mail/v1/cheques">client.printMail.cheques.<a href="./src/resources/print-mail/cheques.ts">create</a>({ ...params }) -> Cheque</code>
- <code title="get /print-mail/v1/cheques/{id}">client.printMail.cheques.<a href="./src/resources/print-mail/cheques.ts">retrieve</a>(id) -> Cheque</code>
- <code title="get /print-mail/v1/cheques">client.printMail.cheques.<a href="./src/resources/print-mail/cheques.ts">list</a>({ ...params }) -> ChequesSkipLimit</code>
- <code title="delete /print-mail/v1/cheques/{id}">client.printMail.cheques.<a href="./src/resources/print-mail/cheques.ts">delete</a>(id) -> Cheque</code>
- <code title="get /print-mail/v1/cheques/{id}/url">client.printMail.cheques.<a href="./src/resources/print-mail/cheques.ts">retrieveURL</a>(id) -> ChequeRetrieveURLResponse</code>
- <code title="get /print-mail/v1/cheques/{id}/with_deposit_ready_pdf">client.printMail.cheques.<a href="./src/resources/print-mail/cheques.ts">retrieveWithDepositReadyPdf</a>(id) -> Cheque</code>

## Contacts

Types:

- <code><a href="./src/resources/print-mail/contacts.ts">Contact</a></code>
- <code><a href="./src/resources/print-mail/contacts.ts">ContactCreate</a></code>
- <code><a href="./src/resources/print-mail/contacts.ts">ContactDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/contacts">client.printMail.contacts.<a href="./src/resources/print-mail/contacts.ts">create</a>({ ...params }) -> Contact</code>
- <code title="get /print-mail/v1/contacts/{id}">client.printMail.contacts.<a href="./src/resources/print-mail/contacts.ts">retrieve</a>(id) -> Contact</code>
- <code title="get /print-mail/v1/contacts">client.printMail.contacts.<a href="./src/resources/print-mail/contacts.ts">list</a>({ ...params }) -> ContactsSkipLimit</code>
- <code title="delete /print-mail/v1/contacts/{id}">client.printMail.contacts.<a href="./src/resources/print-mail/contacts.ts">delete</a>(id) -> ContactDeleteResponse</code>

## Letters

Types:

- <code><a href="./src/resources/print-mail/letters.ts">AddressPlacement</a></code>
- <code><a href="./src/resources/print-mail/letters.ts">AttachedPdf</a></code>
- <code><a href="./src/resources/print-mail/letters.ts">Letter</a></code>
- <code><a href="./src/resources/print-mail/letters.ts">LetterSize</a></code>
- <code><a href="./src/resources/print-mail/letters.ts">PlasticCard</a></code>
- <code><a href="./src/resources/print-mail/letters.ts">LetterRetrieveURLResponse</a></code>

Methods:

- <code title="post /print-mail/v1/letters">client.printMail.letters.<a href="./src/resources/print-mail/letters.ts">create</a>({ ...params }) -> Letter</code>
- <code title="get /print-mail/v1/letters/{id}">client.printMail.letters.<a href="./src/resources/print-mail/letters.ts">retrieve</a>(id) -> Letter</code>
- <code title="get /print-mail/v1/letters">client.printMail.letters.<a href="./src/resources/print-mail/letters.ts">list</a>({ ...params }) -> LettersSkipLimit</code>
- <code title="delete /print-mail/v1/letters/{id}">client.printMail.letters.<a href="./src/resources/print-mail/letters.ts">delete</a>(id) -> Letter</code>
- <code title="get /print-mail/v1/letters/{id}/url">client.printMail.letters.<a href="./src/resources/print-mail/letters.ts">retrieveURL</a>(id) -> LetterRetrieveURLResponse</code>

## MailingListImports

Types:

- <code><a href="./src/resources/print-mail/mailing-list-imports.ts">FileType</a></code>
- <code><a href="./src/resources/print-mail/mailing-list-imports.ts">MailingListImportResponse</a></code>
- <code><a href="./src/resources/print-mail/mailing-list-imports.ts">VerificationStatusCount</a></code>
- <code><a href="./src/resources/print-mail/mailing-list-imports.ts">MailingListImportDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/mailing_list_imports">client.printMail.mailingListImports.<a href="./src/resources/print-mail/mailing-list-imports.ts">create</a>({ ...params }) -> MailingListImportResponse</code>
- <code title="get /print-mail/v1/mailing_list_imports/{id}">client.printMail.mailingListImports.<a href="./src/resources/print-mail/mailing-list-imports.ts">retrieve</a>(id) -> MailingListImportResponse</code>
- <code title="post /print-mail/v1/mailing_list_imports/{id}">client.printMail.mailingListImports.<a href="./src/resources/print-mail/mailing-list-imports.ts">update</a>(id, { ...params }) -> MailingListImportResponse</code>
- <code title="get /print-mail/v1/mailing_list_imports">client.printMail.mailingListImports.<a href="./src/resources/print-mail/mailing-list-imports.ts">list</a>({ ...params }) -> MailingListImportResponsesSkipLimit</code>
- <code title="delete /print-mail/v1/mailing_list_imports/{id}">client.printMail.mailingListImports.<a href="./src/resources/print-mail/mailing-list-imports.ts">delete</a>(id) -> MailingListImportDeleteResponse</code>

## MailingLists

Types:

- <code><a href="./src/resources/print-mail/mailing-lists.ts">MailingList</a></code>
- <code><a href="./src/resources/print-mail/mailing-lists.ts">MailingListUpdate</a></code>
- <code><a href="./src/resources/print-mail/mailing-lists.ts">MailingListDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/mailing_lists">client.printMail.mailingLists.<a href="./src/resources/print-mail/mailing-lists.ts">create</a>({ ...params }) -> MailingList</code>
- <code title="get /print-mail/v1/mailing_lists/{id}">client.printMail.mailingLists.<a href="./src/resources/print-mail/mailing-lists.ts">retrieve</a>(id) -> MailingList</code>
- <code title="post /print-mail/v1/mailing_lists/{id}">client.printMail.mailingLists.<a href="./src/resources/print-mail/mailing-lists.ts">update</a>(id, { ...params }) -> MailingListUpdate</code>
- <code title="get /print-mail/v1/mailing_lists">client.printMail.mailingLists.<a href="./src/resources/print-mail/mailing-lists.ts">list</a>({ ...params }) -> MailingListsSkipLimit</code>
- <code title="delete /print-mail/v1/mailing_lists/{id}">client.printMail.mailingLists.<a href="./src/resources/print-mail/mailing-lists.ts">delete</a>(id) -> MailingListDeleteResponse</code>
- <code title="post /print-mail/v1/mailing_lists/{id}/jobs">client.printMail.mailingLists.<a href="./src/resources/print-mail/mailing-lists.ts">jobs</a>(id, { ...params }) -> MailingList</code>

## OrderProfiles

### Cheques

Types:

- <code><a href="./src/resources/print-mail/order-profiles/cheques.ts">ChequeProfile</a></code>
- <code><a href="./src/resources/print-mail/order-profiles/cheques.ts">CurrencyCode</a></code>
- <code><a href="./src/resources/print-mail/order-profiles/cheques.ts">ChequeListResponse</a></code>
- <code><a href="./src/resources/print-mail/order-profiles/cheques.ts">ChequeDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/order_profiles/cheques">client.printMail.orderProfiles.cheques.<a href="./src/resources/print-mail/order-profiles/cheques.ts">create</a>({ ...params }) -> ChequeProfile</code>
- <code title="get /print-mail/v1/order_profiles/cheques/{id}">client.printMail.orderProfiles.cheques.<a href="./src/resources/print-mail/order-profiles/cheques.ts">retrieve</a>(id, { ...params }) -> ChequeProfile</code>
- <code title="post /print-mail/v1/order_profiles/cheques/{id}">client.printMail.orderProfiles.cheques.<a href="./src/resources/print-mail/order-profiles/cheques.ts">update</a>(id, { ...params }) -> ChequeProfile</code>
- <code title="get /print-mail/v1/order_profiles/cheques">client.printMail.orderProfiles.cheques.<a href="./src/resources/print-mail/order-profiles/cheques.ts">list</a>({ ...params }) -> ChequeListResponsesSkipLimit</code>
- <code title="delete /print-mail/v1/order_profiles/cheques/{id}">client.printMail.orderProfiles.cheques.<a href="./src/resources/print-mail/order-profiles/cheques.ts">delete</a>(id) -> ChequeDeleteResponse</code>

### Letters

Types:

- <code><a href="./src/resources/print-mail/order-profiles/letters.ts">LetterProfile</a></code>
- <code><a href="./src/resources/print-mail/order-profiles/letters.ts">LetterDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/order_profiles/letters">client.printMail.orderProfiles.letters.<a href="./src/resources/print-mail/order-profiles/letters.ts">create</a>({ ...params }) -> LetterProfile</code>
- <code title="get /print-mail/v1/order_profiles/letters/{id}">client.printMail.orderProfiles.letters.<a href="./src/resources/print-mail/order-profiles/letters.ts">retrieve</a>(id, { ...params }) -> LetterProfile</code>
- <code title="post /print-mail/v1/order_profiles/letters/{id}">client.printMail.orderProfiles.letters.<a href="./src/resources/print-mail/order-profiles/letters.ts">update</a>(id, { ...params }) -> LetterProfile</code>
- <code title="get /print-mail/v1/order_profiles/letters">client.printMail.orderProfiles.letters.<a href="./src/resources/print-mail/order-profiles/letters.ts">list</a>({ ...params }) -> LetterProfilesSkipLimit</code>
- <code title="delete /print-mail/v1/order_profiles/letters/{id}">client.printMail.orderProfiles.letters.<a href="./src/resources/print-mail/order-profiles/letters.ts">delete</a>(id) -> LetterDeleteResponse</code>

### Postcards

Types:

- <code><a href="./src/resources/print-mail/order-profiles/postcards.ts">PostcardProfile</a></code>
- <code><a href="./src/resources/print-mail/order-profiles/postcards.ts">PostcardSize</a></code>
- <code><a href="./src/resources/print-mail/order-profiles/postcards.ts">PostcardDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/order_profiles/postcards">client.printMail.orderProfiles.postcards.<a href="./src/resources/print-mail/order-profiles/postcards.ts">create</a>({ ...params }) -> PostcardProfile</code>
- <code title="get /print-mail/v1/order_profiles/postcards/{id}">client.printMail.orderProfiles.postcards.<a href="./src/resources/print-mail/order-profiles/postcards.ts">retrieve</a>(id, { ...params }) -> PostcardProfile</code>
- <code title="post /print-mail/v1/order_profiles/postcards/{id}">client.printMail.orderProfiles.postcards.<a href="./src/resources/print-mail/order-profiles/postcards.ts">update</a>(id, { ...params }) -> PostcardProfile</code>
- <code title="get /print-mail/v1/order_profiles/postcards">client.printMail.orderProfiles.postcards.<a href="./src/resources/print-mail/order-profiles/postcards.ts">list</a>({ ...params }) -> PostcardProfilesSkipLimit</code>
- <code title="delete /print-mail/v1/order_profiles/postcards/{id}">client.printMail.orderProfiles.postcards.<a href="./src/resources/print-mail/order-profiles/postcards.ts">delete</a>(id) -> PostcardDeleteResponse</code>

### SelfMailers

Types:

- <code><a href="./src/resources/print-mail/order-profiles/self-mailers.ts">SelfMailerProfile</a></code>
- <code><a href="./src/resources/print-mail/order-profiles/self-mailers.ts">SelfMailerSize</a></code>
- <code><a href="./src/resources/print-mail/order-profiles/self-mailers.ts">SelfMailerDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/order_profiles/self_mailers">client.printMail.orderProfiles.selfMailers.<a href="./src/resources/print-mail/order-profiles/self-mailers.ts">create</a>({ ...params }) -> SelfMailerProfile</code>
- <code title="get /print-mail/v1/order_profiles/self_mailers/{id}">client.printMail.orderProfiles.selfMailers.<a href="./src/resources/print-mail/order-profiles/self-mailers.ts">retrieve</a>(id, { ...params }) -> SelfMailerProfile</code>
- <code title="post /print-mail/v1/order_profiles/self_mailers/{id}">client.printMail.orderProfiles.selfMailers.<a href="./src/resources/print-mail/order-profiles/self-mailers.ts">update</a>(id, { ...params }) -> SelfMailerProfile</code>
- <code title="get /print-mail/v1/order_profiles/self_mailers">client.printMail.orderProfiles.selfMailers.<a href="./src/resources/print-mail/order-profiles/self-mailers.ts">list</a>({ ...params }) -> SelfMailerProfilesSkipLimit</code>
- <code title="delete /print-mail/v1/order_profiles/self_mailers/{id}">client.printMail.orderProfiles.selfMailers.<a href="./src/resources/print-mail/order-profiles/self-mailers.ts">delete</a>(id) -> SelfMailerDeleteResponse</code>

## Postcards

Types:

- <code><a href="./src/resources/print-mail/postcards.ts">Postcard</a></code>
- <code><a href="./src/resources/print-mail/postcards.ts">PostcardRetrieveURLResponse</a></code>

Methods:

- <code title="post /print-mail/v1/postcards">client.printMail.postcards.<a href="./src/resources/print-mail/postcards.ts">create</a>({ ...params }) -> Postcard</code>
- <code title="get /print-mail/v1/postcards/{id}">client.printMail.postcards.<a href="./src/resources/print-mail/postcards.ts">retrieve</a>(id) -> Postcard</code>
- <code title="get /print-mail/v1/postcards">client.printMail.postcards.<a href="./src/resources/print-mail/postcards.ts">list</a>({ ...params }) -> PostcardsSkipLimit</code>
- <code title="delete /print-mail/v1/postcards/{id}">client.printMail.postcards.<a href="./src/resources/print-mail/postcards.ts">delete</a>(id) -> Postcard</code>
- <code title="get /print-mail/v1/postcards/{id}/url">client.printMail.postcards.<a href="./src/resources/print-mail/postcards.ts">retrieveURL</a>(id) -> PostcardRetrieveURLResponse</code>

## Reports

Types:

- <code><a href="./src/resources/print-mail/reports/reports.ts">DeletedResponse</a></code>
- <code><a href="./src/resources/print-mail/reports/reports.ts">Report</a></code>

Methods:

- <code title="post /print-mail/v1/reports">client.printMail.reports.<a href="./src/resources/print-mail/reports/reports.ts">create</a>({ ...params }) -> Report</code>
- <code title="get /print-mail/v1/reports/{id}">client.printMail.reports.<a href="./src/resources/print-mail/reports/reports.ts">retrieve</a>(id) -> Report</code>
- <code title="post /print-mail/v1/reports/{id}">client.printMail.reports.<a href="./src/resources/print-mail/reports/reports.ts">update</a>(id, { ...params }) -> Report</code>
- <code title="get /print-mail/v1/reports">client.printMail.reports.<a href="./src/resources/print-mail/reports/reports.ts">list</a>({ ...params }) -> ReportsSkipLimit</code>
- <code title="delete /print-mail/v1/reports/{id}">client.printMail.reports.<a href="./src/resources/print-mail/reports/reports.ts">delete</a>(id) -> DeletedResponse</code>
- <code title="post /print-mail/v1/reports/samples">client.printMail.reports.<a href="./src/resources/print-mail/reports/reports.ts">sample</a>({ ...params }) -> ReportSample</code>

### Samples

Types:

- <code><a href="./src/resources/print-mail/reports/samples.ts">ReportSample</a></code>
- <code><a href="./src/resources/print-mail/reports/samples.ts">ReportSampleCreateBase</a></code>

Methods:

- <code title="post /print-mail/v1/reports/{id}/samples">client.printMail.reports.samples.<a href="./src/resources/print-mail/reports/samples.ts">create</a>(id, { ...params }) -> ReportSample</code>

### Exports

Types:

- <code><a href="./src/resources/print-mail/reports/exports.ts">ReportExport</a></code>

Methods:

- <code title="post /print-mail/v1/reports/{reportID}/exports">client.printMail.reports.exports.<a href="./src/resources/print-mail/reports/exports.ts">create</a>(reportID, { ...params }) -> ReportExport</code>
- <code title="get /print-mail/v1/reports/{reportID}/exports/{exportID}">client.printMail.reports.exports.<a href="./src/resources/print-mail/reports/exports.ts">retrieve</a>(exportID, { ...params }) -> ReportExport</code>
- <code title="delete /print-mail/v1/reports/{reportID}/exports/{exportID}">client.printMail.reports.exports.<a href="./src/resources/print-mail/reports/exports.ts">delete</a>(exportID, { ...params }) -> DeletedResponse</code>

## SelfMailers

Types:

- <code><a href="./src/resources/print-mail/self-mailers.ts">SelfMailer</a></code>
- <code><a href="./src/resources/print-mail/self-mailers.ts">SelfMailerRetrieveURLResponse</a></code>

Methods:

- <code title="post /print-mail/v1/self_mailers">client.printMail.selfMailers.<a href="./src/resources/print-mail/self-mailers.ts">create</a>({ ...params }) -> SelfMailer</code>
- <code title="get /print-mail/v1/self_mailers/{id}">client.printMail.selfMailers.<a href="./src/resources/print-mail/self-mailers.ts">retrieve</a>(id) -> SelfMailer</code>
- <code title="get /print-mail/v1/self_mailers">client.printMail.selfMailers.<a href="./src/resources/print-mail/self-mailers.ts">list</a>({ ...params }) -> SelfMailersSkipLimit</code>
- <code title="delete /print-mail/v1/self_mailers/{id}">client.printMail.selfMailers.<a href="./src/resources/print-mail/self-mailers.ts">delete</a>(id) -> SelfMailer</code>
- <code title="get /print-mail/v1/self_mailers/{id}/url">client.printMail.selfMailers.<a href="./src/resources/print-mail/self-mailers.ts">retrieveURL</a>(id) -> SelfMailerRetrieveURLResponse</code>

## SubOrganizations

Types:

- <code><a href="./src/resources/print-mail/sub-organizations.ts">EmailPreferences</a></code>
- <code><a href="./src/resources/print-mail/sub-organizations.ts">SubOrganization</a></code>
- <code><a href="./src/resources/print-mail/sub-organizations.ts">SubOrganizationUpdateResponse</a></code>
- <code><a href="./src/resources/print-mail/sub-organizations.ts">SubOrganizationRetrieveUsersResponse</a></code>

Methods:

- <code title="get /print-mail/v1/sub_organizations/{id}">client.printMail.subOrganizations.<a href="./src/resources/print-mail/sub-organizations.ts">retrieve</a>(id) -> SubOrganization</code>
- <code title="post /print-mail/v1/sub_organizations">client.printMail.subOrganizations.<a href="./src/resources/print-mail/sub-organizations.ts">update</a>({ ...params }) -> SubOrganizationUpdateResponse</code>
- <code title="get /print-mail/v1/sub_organizations">client.printMail.subOrganizations.<a href="./src/resources/print-mail/sub-organizations.ts">list</a>({ ...params }) -> SubOrganizationsSkipLimit</code>
- <code title="get /print-mail/v1/sub_organizations/{id}/users">client.printMail.subOrganizations.<a href="./src/resources/print-mail/sub-organizations.ts">retrieveUsers</a>(id, { ...params }) -> SubOrganizationRetrieveUsersResponse</code>

## Templates

Types:

- <code><a href="./src/resources/print-mail/templates.ts">Template</a></code>
- <code><a href="./src/resources/print-mail/templates.ts">TemplateDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/templates">client.printMail.templates.<a href="./src/resources/print-mail/templates.ts">create</a>({ ...params }) -> Template</code>
- <code title="get /print-mail/v1/templates/{id}">client.printMail.templates.<a href="./src/resources/print-mail/templates.ts">retrieve</a>(id) -> Template</code>
- <code title="post /print-mail/v1/templates/{id}">client.printMail.templates.<a href="./src/resources/print-mail/templates.ts">update</a>(id, { ...params }) -> Template</code>
- <code title="get /print-mail/v1/templates">client.printMail.templates.<a href="./src/resources/print-mail/templates.ts">list</a>({ ...params }) -> TemplatesSkipLimit</code>
- <code title="delete /print-mail/v1/templates/{id}">client.printMail.templates.<a href="./src/resources/print-mail/templates.ts">delete</a>(id) -> TemplateDeleteResponse</code>
