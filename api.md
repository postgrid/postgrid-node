# Shared

Types:

- <code><a href="./src/resources/shared.ts">Cancellation</a></code>
- <code><a href="./src/resources/shared.ts">ContactCreateWithCompanyName</a></code>
- <code><a href="./src/resources/shared.ts">ContactCreateWithFirstName</a></code>

# Contacts

Types:

- <code><a href="./src/resources/contacts.ts">Contact</a></code>
- <code><a href="./src/resources/contacts.ts">ContactDeleteResponse</a></code>

Methods:

- <code title="post /contacts">client.contacts.<a href="./src/resources/contacts.ts">create</a>({ ...params }) -> Contact</code>
- <code title="get /contacts/{id}">client.contacts.<a href="./src/resources/contacts.ts">retrieve</a>(id) -> Contact</code>
- <code title="get /contacts">client.contacts.<a href="./src/resources/contacts.ts">list</a>({ ...params }) -> ContactsList</code>
- <code title="delete /contacts/{id}">client.contacts.<a href="./src/resources/contacts.ts">delete</a>(id) -> ContactDeleteResponse</code>

# Templates

Types:

- <code><a href="./src/resources/templates.ts">Template</a></code>
- <code><a href="./src/resources/templates.ts">TemplateList</a></code>
- <code><a href="./src/resources/templates.ts">TemplateDeleteResponse</a></code>

Methods:

- <code title="post /templates">client.templates.<a href="./src/resources/templates.ts">create</a>({ ...params }) -> Template</code>
- <code title="get /templates/{id}">client.templates.<a href="./src/resources/templates.ts">retrieve</a>(id) -> Template</code>
- <code title="post /templates/{id}">client.templates.<a href="./src/resources/templates.ts">update</a>(id, { ...params }) -> Template</code>
- <code title="get /templates">client.templates.<a href="./src/resources/templates.ts">list</a>({ ...params }) -> TemplatesList</code>
- <code title="delete /templates/{id}">client.templates.<a href="./src/resources/templates.ts">delete</a>(id) -> TemplateDeleteResponse</code>

# BankAccounts

Types:

- <code><a href="./src/resources/bank-accounts.ts">BankAccount</a></code>
- <code><a href="./src/resources/bank-accounts.ts">BankAccountList</a></code>
- <code><a href="./src/resources/bank-accounts.ts">BankAccountDeleteResponse</a></code>

Methods:

- <code title="post /bank_accounts">client.bankAccounts.<a href="./src/resources/bank-accounts.ts">create</a>({ ...params }) -> BankAccount</code>
- <code title="get /bank_accounts/{id}">client.bankAccounts.<a href="./src/resources/bank-accounts.ts">retrieve</a>(id) -> BankAccount</code>
- <code title="get /bank_accounts">client.bankAccounts.<a href="./src/resources/bank-accounts.ts">list</a>({ ...params }) -> BankAccountsList</code>
- <code title="delete /bank_accounts/{id}">client.bankAccounts.<a href="./src/resources/bank-accounts.ts">delete</a>(id) -> BankAccountDeleteResponse</code>

# Cheques

Types:

- <code><a href="./src/resources/cheques/cheques.ts">Cheque</a></code>
- <code><a href="./src/resources/cheques/cheques.ts">ChequeList</a></code>

Methods:

- <code title="post /cheques">client.cheques.<a href="./src/resources/cheques/cheques.ts">create</a>({ ...params }) -> Cheque</code>
- <code title="get /cheques/{id}">client.cheques.<a href="./src/resources/cheques/cheques.ts">retrieve</a>(id) -> Cheque</code>
- <code title="get /cheques">client.cheques.<a href="./src/resources/cheques/cheques.ts">list</a>({ ...params }) -> ChequesList</code>
- <code title="delete /cheques/{id}">client.cheques.<a href="./src/resources/cheques/cheques.ts">cancel</a>(id) -> Cheque</code>

## URL

Types:

- <code><a href="./src/resources/cheques/url.ts">URLRetrieveResponse</a></code>

Methods:

- <code title="get /cheques/{id}/url">client.cheques.url.<a href="./src/resources/cheques/url.ts">retrieve</a>(id) -> URLRetrieveResponse</code>

## WithDepositReadyPdf

Methods:

- <code title="get /cheques/{id}/with_deposit_ready_pdf">client.cheques.withDepositReadyPdf.<a href="./src/resources/cheques/with-deposit-ready-pdf.ts">retrieve</a>(id) -> Cheque</code>

# Letters

Types:

- <code><a href="./src/resources/letters.ts">Letter</a></code>
- <code><a href="./src/resources/letters.ts">LetterList</a></code>
- <code><a href="./src/resources/letters.ts">LetterURLResponse</a></code>

Methods:

- <code title="post /letters">client.letters.<a href="./src/resources/letters.ts">create</a>({ ...params }) -> Letter</code>
- <code title="get /letters/{id}">client.letters.<a href="./src/resources/letters.ts">retrieve</a>(id) -> Letter</code>
- <code title="get /letters">client.letters.<a href="./src/resources/letters.ts">list</a>({ ...params }) -> LettersList</code>
- <code title="delete /letters/{id}">client.letters.<a href="./src/resources/letters.ts">delete</a>(id) -> Letter</code>
- <code title="get /letters/{id}/url">client.letters.<a href="./src/resources/letters.ts">url</a>(id) -> LetterURLResponse</code>

# Postcards

Types:

- <code><a href="./src/resources/postcards.ts">Postcard</a></code>
- <code><a href="./src/resources/postcards.ts">PostcardList</a></code>
- <code><a href="./src/resources/postcards.ts">PostcardURLResponse</a></code>

Methods:

- <code title="post /postcards">client.postcards.<a href="./src/resources/postcards.ts">create</a>({ ...params }) -> Postcard</code>
- <code title="get /postcards/{id}">client.postcards.<a href="./src/resources/postcards.ts">retrieve</a>(id) -> Postcard</code>
- <code title="get /postcards">client.postcards.<a href="./src/resources/postcards.ts">list</a>({ ...params }) -> PostcardsList</code>
- <code title="delete /postcards/{id}">client.postcards.<a href="./src/resources/postcards.ts">delete</a>(id) -> Postcard</code>
- <code title="get /postcards/{id}/url">client.postcards.<a href="./src/resources/postcards.ts">url</a>(id) -> PostcardURLResponse</code>

# Boxes

Types:

- <code><a href="./src/resources/boxes.ts">BoxCreateResponse</a></code>
- <code><a href="./src/resources/boxes.ts">BoxRetrieveResponse</a></code>
- <code><a href="./src/resources/boxes.ts">BoxListResponse</a></code>
- <code><a href="./src/resources/boxes.ts">BoxCancelResponse</a></code>

Methods:

- <code title="post /boxes">client.boxes.<a href="./src/resources/boxes.ts">create</a>({ ...params }) -> BoxCreateResponse</code>
- <code title="get /boxes/{id}">client.boxes.<a href="./src/resources/boxes.ts">retrieve</a>(id) -> BoxRetrieveResponse</code>
- <code title="get /boxes">client.boxes.<a href="./src/resources/boxes.ts">list</a>({ ...params }) -> BoxListResponsesList</code>
- <code title="delete /boxes/{id}">client.boxes.<a href="./src/resources/boxes.ts">cancel</a>(id) -> BoxCancelResponse</code>

# Campaigns

Types:

- <code><a href="./src/resources/campaigns.ts">CampaignCreateResponse</a></code>
- <code><a href="./src/resources/campaigns.ts">CampaignRetrieveResponse</a></code>
- <code><a href="./src/resources/campaigns.ts">CampaignUpdateResponse</a></code>
- <code><a href="./src/resources/campaigns.ts">CampaignListResponse</a></code>
- <code><a href="./src/resources/campaigns.ts">CampaignDeleteResponse</a></code>
- <code><a href="./src/resources/campaigns.ts">CampaignSendResponse</a></code>

Methods:

- <code title="post /campaigns">client.campaigns.<a href="./src/resources/campaigns.ts">create</a>({ ...params }) -> CampaignCreateResponse</code>
- <code title="get /campaigns/{id}">client.campaigns.<a href="./src/resources/campaigns.ts">retrieve</a>(id) -> CampaignRetrieveResponse</code>
- <code title="post /campaigns/{id}">client.campaigns.<a href="./src/resources/campaigns.ts">update</a>(id, { ...params }) -> CampaignUpdateResponse</code>
- <code title="get /campaigns">client.campaigns.<a href="./src/resources/campaigns.ts">list</a>({ ...params }) -> CampaignListResponsesList</code>
- <code title="delete /campaigns/{id}">client.campaigns.<a href="./src/resources/campaigns.ts">delete</a>(id) -> CampaignDeleteResponse</code>
- <code title="post /campaigns/{id}/send">client.campaigns.<a href="./src/resources/campaigns.ts">send</a>(id, { ...params }) -> CampaignSendResponse</code>

# Reports

Types:

- <code><a href="./src/resources/reports/reports.ts">ReportCreateResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportRetrieveResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportUpdateResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportListResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportDeleteResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportRunAdHocQueryResponse</a></code>
- <code><a href="./src/resources/reports/reports.ts">ReportSampleResponse</a></code>

Methods:

- <code title="post /reports/">client.reports.<a href="./src/resources/reports/reports.ts">create</a>({ ...params }) -> ReportCreateResponse</code>
- <code title="get /reports/{id}">client.reports.<a href="./src/resources/reports/reports.ts">retrieve</a>(id) -> ReportRetrieveResponse</code>
- <code title="post /reports/{id}">client.reports.<a href="./src/resources/reports/reports.ts">update</a>(id, { ...params }) -> ReportUpdateResponse</code>
- <code title="get /reports/">client.reports.<a href="./src/resources/reports/reports.ts">list</a>({ ...params }) -> ReportListResponsesList</code>
- <code title="delete /reports/{id}">client.reports.<a href="./src/resources/reports/reports.ts">delete</a>(id) -> ReportDeleteResponse</code>
- <code title="post /reports/samples">client.reports.<a href="./src/resources/reports/reports.ts">runAdHocQuery</a>({ ...params }) -> ReportRunAdHocQueryResponse</code>
- <code title="post /reports/{id}/samples">client.reports.<a href="./src/resources/reports/reports.ts">sample</a>(id, { ...params }) -> ReportSampleResponse</code>

## Exports

Types:

- <code><a href="./src/resources/reports/exports.ts">ExportCreateResponse</a></code>
- <code><a href="./src/resources/reports/exports.ts">ExportRetrieveResponse</a></code>
- <code><a href="./src/resources/reports/exports.ts">ExportDeleteResponse</a></code>

Methods:

- <code title="post /reports/{reportID}/exports">client.reports.exports.<a href="./src/resources/reports/exports.ts">create</a>(reportId, { ...params }) -> ExportCreateResponse</code>
- <code title="get /reports/{reportID}/exports/{exportID}">client.reports.exports.<a href="./src/resources/reports/exports.ts">retrieve</a>(reportId, exportId) -> ExportRetrieveResponse</code>
- <code title="delete /reports/{reportID}/exports/{exportID}">client.reports.exports.<a href="./src/resources/reports/exports.ts">delete</a>(reportId, exportId) -> ExportDeleteResponse</code>

# SelfMailers

Types:

- <code><a href="./src/resources/self-mailers.ts">SelfMailerCreateResponse</a></code>
- <code><a href="./src/resources/self-mailers.ts">SelfMailerRetrieveResponse</a></code>
- <code><a href="./src/resources/self-mailers.ts">SelfMailerListResponse</a></code>
- <code><a href="./src/resources/self-mailers.ts">SelfMailerCancelResponse</a></code>
- <code><a href="./src/resources/self-mailers.ts">SelfMailerRetrievePreviewURLResponse</a></code>

Methods:

- <code title="post /self_mailers">client.selfMailers.<a href="./src/resources/self-mailers.ts">create</a>({ ...params }) -> SelfMailerCreateResponse</code>
- <code title="get /self_mailers/{id}">client.selfMailers.<a href="./src/resources/self-mailers.ts">retrieve</a>(id) -> SelfMailerRetrieveResponse</code>
- <code title="get /self_mailers">client.selfMailers.<a href="./src/resources/self-mailers.ts">list</a>({ ...params }) -> SelfMailerListResponsesList</code>
- <code title="delete /self_mailers/{id}">client.selfMailers.<a href="./src/resources/self-mailers.ts">cancel</a>(id) -> SelfMailerCancelResponse</code>
- <code title="get /self_mailers/{id}/url">client.selfMailers.<a href="./src/resources/self-mailers.ts">retrievePreviewURL</a>(id) -> SelfMailerRetrievePreviewURLResponse</code>

# MailingListImports

Types:

- <code><a href="./src/resources/mailing-list-imports.ts">MailingListImportCreateResponse</a></code>
- <code><a href="./src/resources/mailing-list-imports.ts">MailingListImportRetrieveResponse</a></code>
- <code><a href="./src/resources/mailing-list-imports.ts">MailingListImportUpdateResponse</a></code>
- <code><a href="./src/resources/mailing-list-imports.ts">MailingListImportListResponse</a></code>
- <code><a href="./src/resources/mailing-list-imports.ts">MailingListImportDeleteResponse</a></code>

Methods:

- <code title="post /mailing_list_imports">client.mailingListImports.<a href="./src/resources/mailing-list-imports.ts">create</a>({ ...params }) -> MailingListImportCreateResponse</code>
- <code title="get /mailing_list_imports/{id}">client.mailingListImports.<a href="./src/resources/mailing-list-imports.ts">retrieve</a>(id) -> MailingListImportRetrieveResponse</code>
- <code title="post /mailing_list_imports/{id}">client.mailingListImports.<a href="./src/resources/mailing-list-imports.ts">update</a>(id, { ...params }) -> MailingListImportUpdateResponse</code>
- <code title="get /mailing_list_imports">client.mailingListImports.<a href="./src/resources/mailing-list-imports.ts">list</a>({ ...params }) -> MailingListImportListResponsesList</code>
- <code title="delete /mailing_list_imports/{id}">client.mailingListImports.<a href="./src/resources/mailing-list-imports.ts">delete</a>(id) -> MailingListImportDeleteResponse</code>

# MailingLists

Types:

- <code><a href="./src/resources/mailing-lists.ts">MailingListCreateResponse</a></code>
- <code><a href="./src/resources/mailing-lists.ts">MailingListRetrieveResponse</a></code>
- <code><a href="./src/resources/mailing-lists.ts">MailingListUpdateResponse</a></code>
- <code><a href="./src/resources/mailing-lists.ts">MailingListListResponse</a></code>
- <code><a href="./src/resources/mailing-lists.ts">MailingListDeleteResponse</a></code>
- <code><a href="./src/resources/mailing-lists.ts">MailingListSubmitJobResponse</a></code>

Methods:

- <code title="post /mailing_lists">client.mailingLists.<a href="./src/resources/mailing-lists.ts">create</a>({ ...params }) -> MailingListCreateResponse</code>
- <code title="get /mailing_lists/{id}">client.mailingLists.<a href="./src/resources/mailing-lists.ts">retrieve</a>(id) -> MailingListRetrieveResponse</code>
- <code title="post /mailing_lists/{id}">client.mailingLists.<a href="./src/resources/mailing-lists.ts">update</a>(id, { ...params }) -> MailingListUpdateResponse</code>
- <code title="get /mailing_lists">client.mailingLists.<a href="./src/resources/mailing-lists.ts">list</a>({ ...params }) -> MailingListListResponsesList</code>
- <code title="delete /mailing_lists/{id}">client.mailingLists.<a href="./src/resources/mailing-lists.ts">delete</a>(id) -> MailingListDeleteResponse</code>
- <code title="post /mailing_lists/{id}/jobs">client.mailingLists.<a href="./src/resources/mailing-lists.ts">submitJob</a>(id, { ...params }) -> MailingListSubmitJobResponse</code>

# OrderProfiles

## Cheques

Types:

- <code><a href="./src/resources/order-profiles/cheques.ts">ChequeCreateResponse</a></code>
- <code><a href="./src/resources/order-profiles/cheques.ts">ChequeRetrieveResponse</a></code>
- <code><a href="./src/resources/order-profiles/cheques.ts">ChequeUpdateResponse</a></code>
- <code><a href="./src/resources/order-profiles/cheques.ts">ChequeListResponse</a></code>
- <code><a href="./src/resources/order-profiles/cheques.ts">ChequeDeleteResponse</a></code>

Methods:

- <code title="post /order_profiles/cheques">client.orderProfiles.cheques.<a href="./src/resources/order-profiles/cheques.ts">create</a>({ ...params }) -> ChequeCreateResponse</code>
- <code title="get /order_profiles/cheques/{id}">client.orderProfiles.cheques.<a href="./src/resources/order-profiles/cheques.ts">retrieve</a>(id, { ...params }) -> ChequeRetrieveResponse</code>
- <code title="post /order_profiles/cheques/{id}">client.orderProfiles.cheques.<a href="./src/resources/order-profiles/cheques.ts">update</a>(id, { ...params }) -> ChequeUpdateResponse</code>
- <code title="get /order_profiles/cheques">client.orderProfiles.cheques.<a href="./src/resources/order-profiles/cheques.ts">list</a>({ ...params }) -> ChequeListResponsesList</code>
- <code title="delete /order_profiles/cheques/{id}">client.orderProfiles.cheques.<a href="./src/resources/order-profiles/cheques.ts">delete</a>(id) -> ChequeDeleteResponse</code>

## Letters

Types:

- <code><a href="./src/resources/order-profiles/letters.ts">LetterCreateResponse</a></code>
- <code><a href="./src/resources/order-profiles/letters.ts">LetterRetrieveResponse</a></code>
- <code><a href="./src/resources/order-profiles/letters.ts">LetterUpdateResponse</a></code>
- <code><a href="./src/resources/order-profiles/letters.ts">LetterListResponse</a></code>
- <code><a href="./src/resources/order-profiles/letters.ts">LetterDeleteResponse</a></code>

Methods:

- <code title="post /order_profiles/letters">client.orderProfiles.letters.<a href="./src/resources/order-profiles/letters.ts">create</a>({ ...params }) -> LetterCreateResponse</code>
- <code title="get /order_profiles/letters/{id}">client.orderProfiles.letters.<a href="./src/resources/order-profiles/letters.ts">retrieve</a>(id, { ...params }) -> LetterRetrieveResponse</code>
- <code title="post /order_profiles/letters/{id}">client.orderProfiles.letters.<a href="./src/resources/order-profiles/letters.ts">update</a>(id, { ...params }) -> LetterUpdateResponse</code>
- <code title="get /order_profiles/letters">client.orderProfiles.letters.<a href="./src/resources/order-profiles/letters.ts">list</a>({ ...params }) -> LetterListResponsesList</code>
- <code title="delete /order_profiles/letters/{id}">client.orderProfiles.letters.<a href="./src/resources/order-profiles/letters.ts">delete</a>(id) -> LetterDeleteResponse</code>

## Postcards

Types:

- <code><a href="./src/resources/order-profiles/postcards.ts">PostcardCreateResponse</a></code>
- <code><a href="./src/resources/order-profiles/postcards.ts">PostcardRetrieveResponse</a></code>
- <code><a href="./src/resources/order-profiles/postcards.ts">PostcardUpdateResponse</a></code>
- <code><a href="./src/resources/order-profiles/postcards.ts">PostcardListResponse</a></code>
- <code><a href="./src/resources/order-profiles/postcards.ts">PostcardDeleteResponse</a></code>

Methods:

- <code title="post /order_profiles/postcards">client.orderProfiles.postcards.<a href="./src/resources/order-profiles/postcards.ts">create</a>({ ...params }) -> PostcardCreateResponse</code>
- <code title="get /order_profiles/postcards/{id}">client.orderProfiles.postcards.<a href="./src/resources/order-profiles/postcards.ts">retrieve</a>(id, { ...params }) -> PostcardRetrieveResponse</code>
- <code title="post /order_profiles/postcards/{id}">client.orderProfiles.postcards.<a href="./src/resources/order-profiles/postcards.ts">update</a>(id, { ...params }) -> PostcardUpdateResponse</code>
- <code title="get /order_profiles/postcards">client.orderProfiles.postcards.<a href="./src/resources/order-profiles/postcards.ts">list</a>({ ...params }) -> PostcardListResponsesList</code>
- <code title="delete /order_profiles/postcards/{id}">client.orderProfiles.postcards.<a href="./src/resources/order-profiles/postcards.ts">delete</a>(id) -> PostcardDeleteResponse</code>

## SelfMailers

Types:

- <code><a href="./src/resources/order-profiles/self-mailers.ts">SelfMailerCreateResponse</a></code>
- <code><a href="./src/resources/order-profiles/self-mailers.ts">SelfMailerRetrieveResponse</a></code>
- <code><a href="./src/resources/order-profiles/self-mailers.ts">SelfMailerUpdateResponse</a></code>
- <code><a href="./src/resources/order-profiles/self-mailers.ts">SelfMailerListResponse</a></code>
- <code><a href="./src/resources/order-profiles/self-mailers.ts">SelfMailerDeleteResponse</a></code>

Methods:

- <code title="post /order_profiles/self_mailers">client.orderProfiles.selfMailers.<a href="./src/resources/order-profiles/self-mailers.ts">create</a>({ ...params }) -> SelfMailerCreateResponse</code>
- <code title="get /order_profiles/self_mailers/{id}">client.orderProfiles.selfMailers.<a href="./src/resources/order-profiles/self-mailers.ts">retrieve</a>(id, { ...params }) -> SelfMailerRetrieveResponse</code>
- <code title="post /order_profiles/self_mailers/{id}">client.orderProfiles.selfMailers.<a href="./src/resources/order-profiles/self-mailers.ts">update</a>(id, { ...params }) -> SelfMailerUpdateResponse</code>
- <code title="get /order_profiles/self_mailers">client.orderProfiles.selfMailers.<a href="./src/resources/order-profiles/self-mailers.ts">list</a>({ ...params }) -> SelfMailerListResponsesList</code>
- <code title="delete /order_profiles/self_mailers/{id}">client.orderProfiles.selfMailers.<a href="./src/resources/order-profiles/self-mailers.ts">delete</a>(id) -> SelfMailerDeleteResponse</code>

# SubOrganizations

Types:

- <code><a href="./src/resources/sub-organizations.ts">SubOrganizationCreateResponse</a></code>
- <code><a href="./src/resources/sub-organizations.ts">SubOrganizationRetrieveResponse</a></code>
- <code><a href="./src/resources/sub-organizations.ts">SubOrganizationListResponse</a></code>
- <code><a href="./src/resources/sub-organizations.ts">SubOrganizationListUsersResponse</a></code>

Methods:

- <code title="post /sub_organizations/">client.subOrganizations.<a href="./src/resources/sub-organizations.ts">create</a>({ ...params }) -> SubOrganizationCreateResponse</code>
- <code title="get /sub_organizations/{id}">client.subOrganizations.<a href="./src/resources/sub-organizations.ts">retrieve</a>(id) -> SubOrganizationRetrieveResponse</code>
- <code title="get /sub_organizations/">client.subOrganizations.<a href="./src/resources/sub-organizations.ts">list</a>({ ...params }) -> SubOrganizationListResponsesList</code>
- <code title="get /sub_organizations/{id}/users">client.subOrganizations.<a href="./src/resources/sub-organizations.ts">listUsers</a>(id, { ...params }) -> SubOrganizationListUsersResponse</code>
