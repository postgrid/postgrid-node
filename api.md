# Shared

Types:

- <code><a href="./src/resources/shared.ts">Cancellation</a></code>
- <code><a href="./src/resources/shared.ts">ContactCreateWithCompanyName</a></code>
- <code><a href="./src/resources/shared.ts">ContactCreateWithFirstName</a></code>

# Contacts

Types:

- <code><a href="./src/resources/contacts.ts">Contact</a></code>

# Templates

Types:

- <code><a href="./src/resources/templates.ts">Template</a></code>
- <code><a href="./src/resources/templates.ts">TemplateList</a></code>

# BankAccounts

Types:

- <code><a href="./src/resources/bank-accounts.ts">BankAccount</a></code>
- <code><a href="./src/resources/bank-accounts.ts">BankAccountList</a></code>

# Cheques

Types:

- <code><a href="./src/resources/cheques/cheques.ts">Cheque</a></code>
- <code><a href="./src/resources/cheques/cheques.ts">ChequeList</a></code>

## URL

## WithDepositReadyPdf

# Letters

Types:

- <code><a href="./src/resources/letters.ts">Letter</a></code>
- <code><a href="./src/resources/letters.ts">LetterList</a></code>

# Postcards

Types:

- <code><a href="./src/resources/postcards.ts">Postcard</a></code>
- <code><a href="./src/resources/postcards.ts">PostcardList</a></code>

# Boxes

# Campaigns

# Reports

## Exports

# SelfMailers

# MailingListImports

# MailingLists

# OrderProfiles

## Cheques

## Letters

## Postcards

## SelfMailers

# SubOrganizations

# AddressVerification

# IntlAddressVerification

# Addver

Types:

- <code><a href="./src/resources/addver.ts">AddverCreateVerificationResponse</a></code>

Methods:

- <code title="post /v1/addver/verifications">client.addver.<a href="./src/resources/addver.ts">createVerification</a>({ ...params }) -> AddverCreateVerificationResponse</code>

# IntlAddver

Types:

- <code><a href="./src/resources/intl-addver.ts">IntlAddverVerifyResponse</a></code>

Methods:

- <code title="post /v1/intl_addver/verifications">client.intlAddver.<a href="./src/resources/intl-addver.ts">verify</a>({ ...params }) -> IntlAddverVerifyResponse</code>

# PrintMail

## V1

### BankAccounts

Types:

- <code><a href="./src/resources/print-mail/v1/bank-accounts.ts">BankAccountDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/bank_accounts">client.printMail.v1.bankAccounts.<a href="./src/resources/print-mail/v1/bank-accounts.ts">create</a>({ ...params }) -> BankAccount</code>
- <code title="get /print-mail/v1/bank_accounts/{id}">client.printMail.v1.bankAccounts.<a href="./src/resources/print-mail/v1/bank-accounts.ts">retrieve</a>(id) -> BankAccount</code>
- <code title="get /print-mail/v1/bank_accounts">client.printMail.v1.bankAccounts.<a href="./src/resources/print-mail/v1/bank-accounts.ts">list</a>({ ...params }) -> BankAccountsList</code>
- <code title="delete /print-mail/v1/bank_accounts/{id}">client.printMail.v1.bankAccounts.<a href="./src/resources/print-mail/v1/bank-accounts.ts">delete</a>(id) -> BankAccountDeleteResponse</code>

### Boxes

Types:

- <code><a href="./src/resources/print-mail/v1/boxes.ts">BoxCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/boxes.ts">BoxRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/boxes.ts">BoxListResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/boxes.ts">BoxDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/boxes">client.printMail.v1.boxes.<a href="./src/resources/print-mail/v1/boxes.ts">create</a>({ ...params }) -> BoxCreateResponse</code>
- <code title="get /print-mail/v1/boxes/{id}">client.printMail.v1.boxes.<a href="./src/resources/print-mail/v1/boxes.ts">retrieve</a>(id) -> BoxRetrieveResponse</code>
- <code title="get /print-mail/v1/boxes">client.printMail.v1.boxes.<a href="./src/resources/print-mail/v1/boxes.ts">list</a>({ ...params }) -> BoxListResponsesList</code>
- <code title="delete /print-mail/v1/boxes/{id}">client.printMail.v1.boxes.<a href="./src/resources/print-mail/v1/boxes.ts">delete</a>(id) -> BoxDeleteResponse</code>

### Campaigns

Types:

- <code><a href="./src/resources/print-mail/v1/campaigns.ts">CampaignCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/campaigns.ts">CampaignRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/campaigns.ts">CampaignUpdateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/campaigns.ts">CampaignListResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/campaigns.ts">CampaignDeleteResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/campaigns.ts">CampaignSendResponse</a></code>

Methods:

- <code title="post /print-mail/v1/campaigns">client.printMail.v1.campaigns.<a href="./src/resources/print-mail/v1/campaigns.ts">create</a>({ ...params }) -> CampaignCreateResponse</code>
- <code title="get /print-mail/v1/campaigns/{id}">client.printMail.v1.campaigns.<a href="./src/resources/print-mail/v1/campaigns.ts">retrieve</a>(id) -> CampaignRetrieveResponse</code>
- <code title="post /print-mail/v1/campaigns/{id}">client.printMail.v1.campaigns.<a href="./src/resources/print-mail/v1/campaigns.ts">update</a>(id, { ...params }) -> CampaignUpdateResponse</code>
- <code title="get /print-mail/v1/campaigns">client.printMail.v1.campaigns.<a href="./src/resources/print-mail/v1/campaigns.ts">list</a>({ ...params }) -> CampaignListResponsesList</code>
- <code title="delete /print-mail/v1/campaigns/{id}">client.printMail.v1.campaigns.<a href="./src/resources/print-mail/v1/campaigns.ts">delete</a>(id) -> CampaignDeleteResponse</code>
- <code title="post /print-mail/v1/campaigns/{id}/send">client.printMail.v1.campaigns.<a href="./src/resources/print-mail/v1/campaigns.ts">send</a>(id, { ...params }) -> CampaignSendResponse</code>

### Cheques

Types:

- <code><a href="./src/resources/print-mail/v1/cheques.ts">ChequeRetrieveURLResponse</a></code>

Methods:

- <code title="post /print-mail/v1/cheques">client.printMail.v1.cheques.<a href="./src/resources/print-mail/v1/cheques.ts">create</a>({ ...params }) -> Cheque</code>
- <code title="get /print-mail/v1/cheques/{id}">client.printMail.v1.cheques.<a href="./src/resources/print-mail/v1/cheques.ts">retrieve</a>(id) -> Cheque</code>
- <code title="get /print-mail/v1/cheques">client.printMail.v1.cheques.<a href="./src/resources/print-mail/v1/cheques.ts">list</a>({ ...params }) -> ChequesList</code>
- <code title="delete /print-mail/v1/cheques/{id}">client.printMail.v1.cheques.<a href="./src/resources/print-mail/v1/cheques.ts">delete</a>(id) -> Cheque</code>
- <code title="get /print-mail/v1/cheques/{id}/url">client.printMail.v1.cheques.<a href="./src/resources/print-mail/v1/cheques.ts">retrieveURL</a>(id) -> ChequeRetrieveURLResponse</code>
- <code title="get /print-mail/v1/cheques/{id}/with_deposit_ready_pdf">client.printMail.v1.cheques.<a href="./src/resources/print-mail/v1/cheques.ts">retrieveWithDepositReadyPdf</a>(id) -> Cheque</code>

### Contacts

Types:

- <code><a href="./src/resources/print-mail/v1/contacts.ts">ContactDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/contacts">client.printMail.v1.contacts.<a href="./src/resources/print-mail/v1/contacts.ts">create</a>({ ...params }) -> Contact</code>
- <code title="get /print-mail/v1/contacts/{id}">client.printMail.v1.contacts.<a href="./src/resources/print-mail/v1/contacts.ts">retrieve</a>(id) -> Contact</code>
- <code title="get /print-mail/v1/contacts">client.printMail.v1.contacts.<a href="./src/resources/print-mail/v1/contacts.ts">list</a>({ ...params }) -> ContactsList</code>
- <code title="delete /print-mail/v1/contacts/{id}">client.printMail.v1.contacts.<a href="./src/resources/print-mail/v1/contacts.ts">delete</a>(id) -> ContactDeleteResponse</code>

### Letters

Types:

- <code><a href="./src/resources/print-mail/v1/letters.ts">LetterRetrieveURLResponse</a></code>

Methods:

- <code title="post /print-mail/v1/letters">client.printMail.v1.letters.<a href="./src/resources/print-mail/v1/letters.ts">create</a>({ ...params }) -> Letter</code>
- <code title="get /print-mail/v1/letters/{id}">client.printMail.v1.letters.<a href="./src/resources/print-mail/v1/letters.ts">retrieve</a>(id) -> Letter</code>
- <code title="get /print-mail/v1/letters">client.printMail.v1.letters.<a href="./src/resources/print-mail/v1/letters.ts">list</a>({ ...params }) -> LettersList</code>
- <code title="delete /print-mail/v1/letters/{id}">client.printMail.v1.letters.<a href="./src/resources/print-mail/v1/letters.ts">delete</a>(id) -> Letter</code>
- <code title="get /print-mail/v1/letters/{id}/url">client.printMail.v1.letters.<a href="./src/resources/print-mail/v1/letters.ts">retrieveURL</a>(id) -> LetterRetrieveURLResponse</code>

### MailingListImports

Types:

- <code><a href="./src/resources/print-mail/v1/mailing-list-imports.ts">MailingListImportCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/mailing-list-imports.ts">MailingListImportRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/mailing-list-imports.ts">MailingListImportUpdateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/mailing-list-imports.ts">MailingListImportListResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/mailing-list-imports.ts">MailingListImportDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/mailing_list_imports">client.printMail.v1.mailingListImports.<a href="./src/resources/print-mail/v1/mailing-list-imports.ts">create</a>({ ...params }) -> MailingListImportCreateResponse</code>
- <code title="get /print-mail/v1/mailing_list_imports/{id}">client.printMail.v1.mailingListImports.<a href="./src/resources/print-mail/v1/mailing-list-imports.ts">retrieve</a>(id) -> MailingListImportRetrieveResponse</code>
- <code title="post /print-mail/v1/mailing_list_imports/{id}">client.printMail.v1.mailingListImports.<a href="./src/resources/print-mail/v1/mailing-list-imports.ts">update</a>(id, { ...params }) -> MailingListImportUpdateResponse</code>
- <code title="get /print-mail/v1/mailing_list_imports">client.printMail.v1.mailingListImports.<a href="./src/resources/print-mail/v1/mailing-list-imports.ts">list</a>({ ...params }) -> MailingListImportListResponsesList</code>
- <code title="delete /print-mail/v1/mailing_list_imports/{id}">client.printMail.v1.mailingListImports.<a href="./src/resources/print-mail/v1/mailing-list-imports.ts">delete</a>(id) -> MailingListImportDeleteResponse</code>

### MailingLists

Types:

- <code><a href="./src/resources/print-mail/v1/mailing-lists.ts">MailingListCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/mailing-lists.ts">MailingListRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/mailing-lists.ts">MailingListUpdateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/mailing-lists.ts">MailingListListResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/mailing-lists.ts">MailingListDeleteResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/mailing-lists.ts">MailingListJobsResponse</a></code>

Methods:

- <code title="post /print-mail/v1/mailing_lists">client.printMail.v1.mailingLists.<a href="./src/resources/print-mail/v1/mailing-lists.ts">create</a>({ ...params }) -> MailingListCreateResponse</code>
- <code title="get /print-mail/v1/mailing_lists/{id}">client.printMail.v1.mailingLists.<a href="./src/resources/print-mail/v1/mailing-lists.ts">retrieve</a>(id) -> MailingListRetrieveResponse</code>
- <code title="post /print-mail/v1/mailing_lists/{id}">client.printMail.v1.mailingLists.<a href="./src/resources/print-mail/v1/mailing-lists.ts">update</a>(id, { ...params }) -> MailingListUpdateResponse</code>
- <code title="get /print-mail/v1/mailing_lists">client.printMail.v1.mailingLists.<a href="./src/resources/print-mail/v1/mailing-lists.ts">list</a>({ ...params }) -> MailingListListResponsesList</code>
- <code title="delete /print-mail/v1/mailing_lists/{id}">client.printMail.v1.mailingLists.<a href="./src/resources/print-mail/v1/mailing-lists.ts">delete</a>(id) -> MailingListDeleteResponse</code>
- <code title="post /print-mail/v1/mailing_lists/{id}/jobs">client.printMail.v1.mailingLists.<a href="./src/resources/print-mail/v1/mailing-lists.ts">jobs</a>(id, { ...params }) -> MailingListJobsResponse</code>

### OrderProfiles

#### Cheques

Types:

- <code><a href="./src/resources/print-mail/v1/order-profiles/cheques.ts">ChequeCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/cheques.ts">ChequeRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/cheques.ts">ChequeUpdateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/cheques.ts">ChequeListResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/cheques.ts">ChequeDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/order_profiles/cheques">client.printMail.v1.orderProfiles.cheques.<a href="./src/resources/print-mail/v1/order-profiles/cheques.ts">create</a>({ ...params }) -> ChequeCreateResponse</code>
- <code title="get /print-mail/v1/order_profiles/cheques/{id}">client.printMail.v1.orderProfiles.cheques.<a href="./src/resources/print-mail/v1/order-profiles/cheques.ts">retrieve</a>(id, { ...params }) -> ChequeRetrieveResponse</code>
- <code title="post /print-mail/v1/order_profiles/cheques/{id}">client.printMail.v1.orderProfiles.cheques.<a href="./src/resources/print-mail/v1/order-profiles/cheques.ts">update</a>(id, { ...params }) -> ChequeUpdateResponse</code>
- <code title="get /print-mail/v1/order_profiles/cheques">client.printMail.v1.orderProfiles.cheques.<a href="./src/resources/print-mail/v1/order-profiles/cheques.ts">list</a>({ ...params }) -> ChequeListResponsesList</code>
- <code title="delete /print-mail/v1/order_profiles/cheques/{id}">client.printMail.v1.orderProfiles.cheques.<a href="./src/resources/print-mail/v1/order-profiles/cheques.ts">delete</a>(id) -> ChequeDeleteResponse</code>

#### Letters

Types:

- <code><a href="./src/resources/print-mail/v1/order-profiles/letters.ts">LetterCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/letters.ts">LetterRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/letters.ts">LetterUpdateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/letters.ts">LetterListResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/letters.ts">LetterDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/order_profiles/letters">client.printMail.v1.orderProfiles.letters.<a href="./src/resources/print-mail/v1/order-profiles/letters.ts">create</a>({ ...params }) -> LetterCreateResponse</code>
- <code title="get /print-mail/v1/order_profiles/letters/{id}">client.printMail.v1.orderProfiles.letters.<a href="./src/resources/print-mail/v1/order-profiles/letters.ts">retrieve</a>(id, { ...params }) -> LetterRetrieveResponse</code>
- <code title="post /print-mail/v1/order_profiles/letters/{id}">client.printMail.v1.orderProfiles.letters.<a href="./src/resources/print-mail/v1/order-profiles/letters.ts">update</a>(id, { ...params }) -> LetterUpdateResponse</code>
- <code title="get /print-mail/v1/order_profiles/letters">client.printMail.v1.orderProfiles.letters.<a href="./src/resources/print-mail/v1/order-profiles/letters.ts">list</a>({ ...params }) -> LetterListResponsesList</code>
- <code title="delete /print-mail/v1/order_profiles/letters/{id}">client.printMail.v1.orderProfiles.letters.<a href="./src/resources/print-mail/v1/order-profiles/letters.ts">delete</a>(id) -> LetterDeleteResponse</code>

#### Postcards

Types:

- <code><a href="./src/resources/print-mail/v1/order-profiles/postcards.ts">PostcardCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/postcards.ts">PostcardRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/postcards.ts">PostcardUpdateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/postcards.ts">PostcardListResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/postcards.ts">PostcardDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/order_profiles/postcards">client.printMail.v1.orderProfiles.postcards.<a href="./src/resources/print-mail/v1/order-profiles/postcards.ts">create</a>({ ...params }) -> PostcardCreateResponse</code>
- <code title="get /print-mail/v1/order_profiles/postcards/{id}">client.printMail.v1.orderProfiles.postcards.<a href="./src/resources/print-mail/v1/order-profiles/postcards.ts">retrieve</a>(id, { ...params }) -> PostcardRetrieveResponse</code>
- <code title="post /print-mail/v1/order_profiles/postcards/{id}">client.printMail.v1.orderProfiles.postcards.<a href="./src/resources/print-mail/v1/order-profiles/postcards.ts">update</a>(id, { ...params }) -> PostcardUpdateResponse</code>
- <code title="get /print-mail/v1/order_profiles/postcards">client.printMail.v1.orderProfiles.postcards.<a href="./src/resources/print-mail/v1/order-profiles/postcards.ts">list</a>({ ...params }) -> PostcardListResponsesList</code>
- <code title="delete /print-mail/v1/order_profiles/postcards/{id}">client.printMail.v1.orderProfiles.postcards.<a href="./src/resources/print-mail/v1/order-profiles/postcards.ts">delete</a>(id) -> PostcardDeleteResponse</code>

#### SelfMailers

Types:

- <code><a href="./src/resources/print-mail/v1/order-profiles/self-mailers.ts">SelfMailerCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/self-mailers.ts">SelfMailerRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/self-mailers.ts">SelfMailerUpdateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/self-mailers.ts">SelfMailerListResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/order-profiles/self-mailers.ts">SelfMailerDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/order_profiles/self_mailers">client.printMail.v1.orderProfiles.selfMailers.<a href="./src/resources/print-mail/v1/order-profiles/self-mailers.ts">create</a>({ ...params }) -> SelfMailerCreateResponse</code>
- <code title="get /print-mail/v1/order_profiles/self_mailers/{id}">client.printMail.v1.orderProfiles.selfMailers.<a href="./src/resources/print-mail/v1/order-profiles/self-mailers.ts">retrieve</a>(id, { ...params }) -> SelfMailerRetrieveResponse</code>
- <code title="post /print-mail/v1/order_profiles/self_mailers/{id}">client.printMail.v1.orderProfiles.selfMailers.<a href="./src/resources/print-mail/v1/order-profiles/self-mailers.ts">update</a>(id, { ...params }) -> SelfMailerUpdateResponse</code>
- <code title="get /print-mail/v1/order_profiles/self_mailers">client.printMail.v1.orderProfiles.selfMailers.<a href="./src/resources/print-mail/v1/order-profiles/self-mailers.ts">list</a>({ ...params }) -> SelfMailerListResponsesList</code>
- <code title="delete /print-mail/v1/order_profiles/self_mailers/{id}">client.printMail.v1.orderProfiles.selfMailers.<a href="./src/resources/print-mail/v1/order-profiles/self-mailers.ts">delete</a>(id) -> SelfMailerDeleteResponse</code>

### Postcards

Types:

- <code><a href="./src/resources/print-mail/v1/postcards.ts">PostcardRetrieveURLResponse</a></code>

Methods:

- <code title="post /print-mail/v1/postcards">client.printMail.v1.postcards.<a href="./src/resources/print-mail/v1/postcards.ts">create</a>({ ...params }) -> Postcard</code>
- <code title="get /print-mail/v1/postcards/{id}">client.printMail.v1.postcards.<a href="./src/resources/print-mail/v1/postcards.ts">retrieve</a>(id) -> Postcard</code>
- <code title="get /print-mail/v1/postcards">client.printMail.v1.postcards.<a href="./src/resources/print-mail/v1/postcards.ts">list</a>({ ...params }) -> PostcardsList</code>
- <code title="delete /print-mail/v1/postcards/{id}">client.printMail.v1.postcards.<a href="./src/resources/print-mail/v1/postcards.ts">delete</a>(id) -> Postcard</code>
- <code title="get /print-mail/v1/postcards/{id}/url">client.printMail.v1.postcards.<a href="./src/resources/print-mail/v1/postcards.ts">retrieveURL</a>(id) -> PostcardRetrieveURLResponse</code>

### Reports

Types:

- <code><a href="./src/resources/print-mail/v1/reports/reports.ts">ReportRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/reports/reports.ts">ReportUpdateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/reports/reports.ts">ReportDeleteResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/reports/reports.ts">ReportRetrieveResponse</a></code>

Methods:

- <code title="get /print-mail/v1/reports/{id}">client.printMail.v1.reports.<a href="./src/resources/print-mail/v1/reports/reports.ts">retrieve</a>(id) -> ReportRetrieveResponse</code>
- <code title="post /print-mail/v1/reports/{id}">client.printMail.v1.reports.<a href="./src/resources/print-mail/v1/reports/reports.ts">update</a>(id, { ...params }) -> ReportUpdateResponse</code>
- <code title="delete /print-mail/v1/reports/{id}">client.printMail.v1.reports.<a href="./src/resources/print-mail/v1/reports/reports.ts">delete</a>(id) -> ReportDeleteResponse</code>
- <code title="get /print-mail/v1/reports/">client.printMail.v1.reports.<a href="./src/resources/print-mail/v1/reports/reports.ts">retrieve</a>({ ...params }) -> ReportRetrieveResponse</code>

#### Samples

Types:

- <code><a href="./src/resources/print-mail/v1/reports/samples.ts">SampleCreateResponse</a></code>

Methods:

- <code title="post /print-mail/v1/reports/{id}/samples">client.printMail.v1.reports.samples.<a href="./src/resources/print-mail/v1/reports/samples.ts">create</a>(id, { ...params }) -> SampleCreateResponse</code>

#### Exports

Types:

- <code><a href="./src/resources/print-mail/v1/reports/exports.ts">ExportCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/reports/exports.ts">ExportRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/reports/exports.ts">ExportDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/reports/{reportID}/exports">client.printMail.v1.reports.exports.<a href="./src/resources/print-mail/v1/reports/exports.ts">create</a>(reportID, { ...params }) -> ExportCreateResponse</code>
- <code title="get /print-mail/v1/reports/{reportID}/exports/{exportID}">client.printMail.v1.reports.exports.<a href="./src/resources/print-mail/v1/reports/exports.ts">retrieve</a>(exportID, { ...params }) -> ExportRetrieveResponse</code>
- <code title="delete /print-mail/v1/reports/{reportID}/exports/{exportID}">client.printMail.v1.reports.exports.<a href="./src/resources/print-mail/v1/reports/exports.ts">delete</a>(exportID, { ...params }) -> ExportDeleteResponse</code>

### SelfMailers

Types:

- <code><a href="./src/resources/print-mail/v1/self-mailers.ts">SelfMailerCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/self-mailers.ts">SelfMailerRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/self-mailers.ts">SelfMailerListResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/self-mailers.ts">SelfMailerDeleteResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/self-mailers.ts">SelfMailerRetrieveURLResponse</a></code>

Methods:

- <code title="post /print-mail/v1/self_mailers">client.printMail.v1.selfMailers.<a href="./src/resources/print-mail/v1/self-mailers.ts">create</a>({ ...params }) -> SelfMailerCreateResponse</code>
- <code title="get /print-mail/v1/self_mailers/{id}">client.printMail.v1.selfMailers.<a href="./src/resources/print-mail/v1/self-mailers.ts">retrieve</a>(id) -> SelfMailerRetrieveResponse</code>
- <code title="get /print-mail/v1/self_mailers">client.printMail.v1.selfMailers.<a href="./src/resources/print-mail/v1/self-mailers.ts">list</a>({ ...params }) -> SelfMailerListResponsesList</code>
- <code title="delete /print-mail/v1/self_mailers/{id}">client.printMail.v1.selfMailers.<a href="./src/resources/print-mail/v1/self-mailers.ts">delete</a>(id) -> SelfMailerDeleteResponse</code>
- <code title="get /print-mail/v1/self_mailers/{id}/url">client.printMail.v1.selfMailers.<a href="./src/resources/print-mail/v1/self-mailers.ts">retrieveURL</a>(id) -> SelfMailerRetrieveURLResponse</code>

### SubOrganizations

Types:

- <code><a href="./src/resources/print-mail/v1/sub-organizations.ts">SubOrganizationRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/sub-organizations.ts">SubOrganizationUpdateResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/sub-organizations.ts">SubOrganizationRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/v1/sub-organizations.ts">SubOrganizationRetrieveUsersResponse</a></code>

Methods:

- <code title="get /print-mail/v1/sub_organizations/{id}">client.printMail.v1.subOrganizations.<a href="./src/resources/print-mail/v1/sub-organizations.ts">retrieve</a>(id) -> SubOrganizationRetrieveResponse</code>
- <code title="post /print-mail/v1/sub_organizations/">client.printMail.v1.subOrganizations.<a href="./src/resources/print-mail/v1/sub-organizations.ts">update</a>({ ...params }) -> SubOrganizationUpdateResponse</code>
- <code title="get /print-mail/v1/sub_organizations/">client.printMail.v1.subOrganizations.<a href="./src/resources/print-mail/v1/sub-organizations.ts">retrieve</a>({ ...params }) -> SubOrganizationRetrieveResponse</code>
- <code title="get /print-mail/v1/sub_organizations/{id}/users">client.printMail.v1.subOrganizations.<a href="./src/resources/print-mail/v1/sub-organizations.ts">retrieveUsers</a>(id, { ...params }) -> SubOrganizationRetrieveUsersResponse</code>

### Templates

Types:

- <code><a href="./src/resources/print-mail/v1/templates.ts">TemplateDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/templates">client.printMail.v1.templates.<a href="./src/resources/print-mail/v1/templates.ts">create</a>({ ...params }) -> Template</code>
- <code title="get /print-mail/v1/templates/{id}">client.printMail.v1.templates.<a href="./src/resources/print-mail/v1/templates.ts">retrieve</a>(id) -> Template</code>
- <code title="post /print-mail/v1/templates/{id}">client.printMail.v1.templates.<a href="./src/resources/print-mail/v1/templates.ts">update</a>(id, { ...params }) -> Template</code>
- <code title="get /print-mail/v1/templates">client.printMail.v1.templates.<a href="./src/resources/print-mail/v1/templates.ts">list</a>({ ...params }) -> TemplatesList</code>
- <code title="delete /print-mail/v1/templates/{id}">client.printMail.v1.templates.<a href="./src/resources/print-mail/v1/templates.ts">delete</a>(id) -> TemplateDeleteResponse</code>
