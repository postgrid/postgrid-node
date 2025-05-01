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

## Samples

Types:

- <code><a href="./src/resources/reports/samples.ts">SampleRunResponse</a></code>
- <code><a href="./src/resources/reports/samples.ts">SampleSampleResponse</a></code>

Methods:

- <code title="post /reports/samples">client.reports.samples.<a href="./src/resources/reports/samples.ts">run</a>({ ...params }) -> SampleRunResponse</code>
- <code title="post /reports/{id}/samples">client.reports.samples.<a href="./src/resources/reports/samples.ts">sample</a>(id, { ...params }) -> SampleSampleResponse</code>

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

Methods:

- <code title="post /self_mailers">client.selfMailers.<a href="./src/resources/self-mailers.ts">create</a>({ ...params }) -> SelfMailerCreateResponse</code>
- <code title="get /self_mailers/{id}">client.selfMailers.<a href="./src/resources/self-mailers.ts">retrieve</a>(id) -> SelfMailerRetrieveResponse</code>
- <code title="get /self_mailers">client.selfMailers.<a href="./src/resources/self-mailers.ts">list</a>({ ...params }) -> SelfMailerListResponsesList</code>
- <code title="delete /self_mailers/{id}">client.selfMailers.<a href="./src/resources/self-mailers.ts">cancel</a>(id) -> SelfMailerCancelResponse</code>
