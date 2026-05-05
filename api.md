# AddressVerification

Types:

- <code><a href="./src/resources/address-verification.ts">Errors</a></code>
- <code><a href="./src/resources/address-verification.ts">Status</a></code>
- <code><a href="./src/resources/address-verification.ts">AddressVerificationAutocompleteResponse</a></code>
- <code><a href="./src/resources/address-verification.ts">AddressVerificationBatchVerificationResponse</a></code>
- <code><a href="./src/resources/address-verification.ts">AddressVerificationGetAutocompletePreviewsResponse</a></code>
- <code><a href="./src/resources/address-verification.ts">AddressVerificationGetLookupInfoResponse</a></code>
- <code><a href="./src/resources/address-verification.ts">AddressVerificationLookupCityOrStateFromPostalOrZipCodeResponse</a></code>
- <code><a href="./src/resources/address-verification.ts">AddressVerificationLookupZipCodeFromCityOrStateResponse</a></code>
- <code><a href="./src/resources/address-verification.ts">AddressVerificationParseAnAddressResponse</a></code>
- <code><a href="./src/resources/address-verification.ts">AddressVerificationSuggestAddressesResponse</a></code>
- <code><a href="./src/resources/address-verification.ts">AddressVerificationVerifyResponse</a></code>

Methods:

- <code title="post /v1/addver/completions">client.addressVerification.<a href="./src/resources/address-verification.ts">autocomplete</a>({ ...params }) -> AddressVerificationAutocompleteResponse</code>
- <code title="post /v1/addver/verifications/batch">client.addressVerification.<a href="./src/resources/address-verification.ts">batchVerification</a>({ ...params }) -> AddressVerificationBatchVerificationResponse</code>
- <code title="get /v1/addver/completions">client.addressVerification.<a href="./src/resources/address-verification.ts">getAutocompletePreviews</a>({ ...params }) -> AddressVerificationGetAutocompletePreviewsResponse</code>
- <code title="get /v1/addver/">client.addressVerification.<a href="./src/resources/address-verification.ts">getLookupInfo</a>() -> AddressVerificationGetLookupInfoResponse</code>
- <code title="post /v1/addver/city_states">client.addressVerification.<a href="./src/resources/address-verification.ts">lookupCityOrStateFromPostalOrZipCode</a>({ ...params }) -> AddressVerificationLookupCityOrStateFromPostalOrZipCodeResponse</code>
- <code title="post /v1/addver/zip_codes">client.addressVerification.<a href="./src/resources/address-verification.ts">lookupZipCodeFromCityOrState</a>({ ...params }) -> AddressVerificationLookupZipCodeFromCityOrStateResponse</code>
- <code title="post /v1/addver/parses">client.addressVerification.<a href="./src/resources/address-verification.ts">parseAnAddress</a>({ ...params }) -> AddressVerificationParseAnAddressResponse</code>
- <code title="post /v1/addver/suggestions">client.addressVerification.<a href="./src/resources/address-verification.ts">suggestAddresses</a>({ ...params }) -> AddressVerificationSuggestAddressesResponse</code>
- <code title="post /v1/addver/verifications">client.addressVerification.<a href="./src/resources/address-verification.ts">verify</a>({ ...params }) -> AddressVerificationVerifyResponse</code>

# IntlAddressVerification

Types:

- <code><a href="./src/resources/intl-address-verification.ts">IntlAddressVerificationAutocompleteResponse</a></code>
- <code><a href="./src/resources/intl-address-verification.ts">IntlAddressVerificationBatchVerificationResponse</a></code>
- <code><a href="./src/resources/intl-address-verification.ts">IntlAddressVerificationGetAutocompleteAdvancedPreviewsResponse</a></code>
- <code><a href="./src/resources/intl-address-verification.ts">IntlAddressVerificationGetAutocompletePreviewsResponse</a></code>
- <code><a href="./src/resources/intl-address-verification.ts">IntlAddressVerificationVerifyResponse</a></code>

Methods:

- <code title="post /v1/intl_addver/completions">client.intlAddressVerification.<a href="./src/resources/intl-address-verification.ts">autocomplete</a>({ ...params }) -> IntlAddressVerificationAutocompleteResponse</code>
- <code title="post /v1/intl_addver/verifications/batch">client.intlAddressVerification.<a href="./src/resources/intl-address-verification.ts">batchVerification</a>({ ...params }) -> IntlAddressVerificationBatchVerificationResponse</code>
- <code title="get /v1/intl_addver/completions">client.intlAddressVerification.<a href="./src/resources/intl-address-verification.ts">getAutocompleteAdvancedPreviews</a>({ ...params }) -> IntlAddressVerificationGetAutocompleteAdvancedPreviewsResponse</code>
- <code title="get /v1/intl_addver/completions">client.intlAddressVerification.<a href="./src/resources/intl-address-verification.ts">getAutocompletePreviews</a>({ ...params }) -> IntlAddressVerificationGetAutocompletePreviewsResponse</code>
- <code title="post /v1/intl_addver/verifications">client.intlAddressVerification.<a href="./src/resources/intl-address-verification.ts">verify</a>({ ...params }) -> IntlAddressVerificationVerifyResponse</code>

# PrintMail

## Contacts

Types:

- <code><a href="./src/resources/print-mail/contacts.ts">Contact</a></code>
- <code><a href="./src/resources/print-mail/contacts.ts">ContactCreate</a></code>
- <code><a href="./src/resources/print-mail/contacts.ts">ContactCreateWithCompanyName</a></code>
- <code><a href="./src/resources/print-mail/contacts.ts">ContactCreateWithFirstName</a></code>
- <code><a href="./src/resources/print-mail/contacts.ts">ContactDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/contacts">client.printMail.contacts.<a href="./src/resources/print-mail/contacts.ts">create</a>({ ...params }) -> Contact</code>
- <code title="get /print-mail/v1/contacts/{id}">client.printMail.contacts.<a href="./src/resources/print-mail/contacts.ts">retrieve</a>(id) -> Contact</code>
- <code title="get /print-mail/v1/contacts">client.printMail.contacts.<a href="./src/resources/print-mail/contacts.ts">list</a>({ ...params }) -> ContactsSkipLimit</code>
- <code title="delete /print-mail/v1/contacts/{id}">client.printMail.contacts.<a href="./src/resources/print-mail/contacts.ts">delete</a>(id) -> ContactDeleteResponse</code>

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

## Trackers

Types:

- <code><a href="./src/resources/print-mail/trackers.ts">TrackerCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/trackers.ts">TrackerRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/trackers.ts">TrackerUpdateResponse</a></code>
- <code><a href="./src/resources/print-mail/trackers.ts">TrackerListResponse</a></code>
- <code><a href="./src/resources/print-mail/trackers.ts">TrackerDeleteResponse</a></code>
- <code><a href="./src/resources/print-mail/trackers.ts">TrackerRetrieveVisitsResponse</a></code>

Methods:

- <code title="post /print-mail/v1/trackers">client.printMail.trackers.<a href="./src/resources/print-mail/trackers.ts">create</a>({ ...params }) -> TrackerCreateResponse</code>
- <code title="get /print-mail/v1/trackers/{id}">client.printMail.trackers.<a href="./src/resources/print-mail/trackers.ts">retrieve</a>(id) -> TrackerRetrieveResponse</code>
- <code title="post /print-mail/v1/trackers/{id}">client.printMail.trackers.<a href="./src/resources/print-mail/trackers.ts">update</a>(id, { ...params }) -> TrackerUpdateResponse</code>
- <code title="get /print-mail/v1/trackers">client.printMail.trackers.<a href="./src/resources/print-mail/trackers.ts">list</a>({ ...params }) -> TrackerListResponsesSkipLimit</code>
- <code title="delete /print-mail/v1/trackers/{id}">client.printMail.trackers.<a href="./src/resources/print-mail/trackers.ts">delete</a>(id) -> TrackerDeleteResponse</code>
- <code title="get /print-mail/v1/trackers/{id}/visits">client.printMail.trackers.<a href="./src/resources/print-mail/trackers.ts">retrieveVisits</a>(id, { ...params }) -> TrackerRetrieveVisitsResponsesSkipLimit</code>

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
- <code title="post /print-mail/v1/letters/{id}/cancellation">client.printMail.letters.<a href="./src/resources/print-mail/letters.ts">cancel</a>(id, { ...params }) -> Letter</code>
- <code title="post /print-mail/v1/letters/{id}/progressions">client.printMail.letters.<a href="./src/resources/print-mail/letters.ts">progress</a>(id) -> Letter</code>
- <code title="get /print-mail/v1/letters/{id}/url">client.printMail.letters.<a href="./src/resources/print-mail/letters.ts">retrieveURL</a>(id) -> LetterRetrieveURLResponse</code>

## Postcards

Types:

- <code><a href="./src/resources/print-mail/postcards.ts">Postcard</a></code>
- <code><a href="./src/resources/print-mail/postcards.ts">PostcardRetrieveURLResponse</a></code>

Methods:

- <code title="post /print-mail/v1/postcards">client.printMail.postcards.<a href="./src/resources/print-mail/postcards.ts">create</a>({ ...params }) -> Postcard</code>
- <code title="get /print-mail/v1/postcards/{id}">client.printMail.postcards.<a href="./src/resources/print-mail/postcards.ts">retrieve</a>(id) -> Postcard</code>
- <code title="get /print-mail/v1/postcards">client.printMail.postcards.<a href="./src/resources/print-mail/postcards.ts">list</a>({ ...params }) -> PostcardsSkipLimit</code>
- <code title="delete /print-mail/v1/postcards/{id}">client.printMail.postcards.<a href="./src/resources/print-mail/postcards.ts">delete</a>(id) -> Postcard</code>
- <code title="post /print-mail/v1/postcards/{id}/cancellation">client.printMail.postcards.<a href="./src/resources/print-mail/postcards.ts">cancel</a>(id, { ...params }) -> Postcard</code>
- <code title="post /print-mail/v1/postcards/{id}/progressions">client.printMail.postcards.<a href="./src/resources/print-mail/postcards.ts">progress</a>(id) -> Postcard</code>
- <code title="get /print-mail/v1/postcards/{id}/url">client.printMail.postcards.<a href="./src/resources/print-mail/postcards.ts">retrieveURL</a>(id) -> PostcardRetrieveURLResponse</code>

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
- <code title="post /print-mail/v1/cheques/{id}/cancellation">client.printMail.cheques.<a href="./src/resources/print-mail/cheques.ts">cancel</a>(id, { ...params }) -> Cheque</code>
- <code title="post /print-mail/v1/cheques/{id}/progressions">client.printMail.cheques.<a href="./src/resources/print-mail/cheques.ts">progress</a>(id) -> Cheque</code>
- <code title="get /print-mail/v1/cheques/{id}/url">client.printMail.cheques.<a href="./src/resources/print-mail/cheques.ts">retrieveURL</a>(id) -> ChequeRetrieveURLResponse</code>
- <code title="get /print-mail/v1/cheques/{id}/with_deposit_ready_pdf">client.printMail.cheques.<a href="./src/resources/print-mail/cheques.ts">retrieveWithDepositReadyPdf</a>(id) -> Cheque</code>

## SelfMailers

Types:

- <code><a href="./src/resources/print-mail/self-mailers.ts">SelfMailer</a></code>
- <code><a href="./src/resources/print-mail/self-mailers.ts">SelfMailerRetrieveURLResponse</a></code>

Methods:

- <code title="post /print-mail/v1/self_mailers">client.printMail.selfMailers.<a href="./src/resources/print-mail/self-mailers.ts">create</a>({ ...params }) -> SelfMailer</code>
- <code title="get /print-mail/v1/self_mailers/{id}">client.printMail.selfMailers.<a href="./src/resources/print-mail/self-mailers.ts">retrieve</a>(id) -> SelfMailer</code>
- <code title="get /print-mail/v1/self_mailers">client.printMail.selfMailers.<a href="./src/resources/print-mail/self-mailers.ts">list</a>({ ...params }) -> SelfMailersSkipLimit</code>
- <code title="delete /print-mail/v1/self_mailers/{id}">client.printMail.selfMailers.<a href="./src/resources/print-mail/self-mailers.ts">delete</a>(id) -> SelfMailer</code>
- <code title="post /print-mail/v1/self_mailers/{id}/progressions">client.printMail.selfMailers.<a href="./src/resources/print-mail/self-mailers.ts">progress</a>(id) -> SelfMailer</code>
- <code title="get /print-mail/v1/self_mailers/{id}/url">client.printMail.selfMailers.<a href="./src/resources/print-mail/self-mailers.ts">retrieveURL</a>(id) -> SelfMailerRetrieveURLResponse</code>

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

## Boxes

Types:

- <code><a href="./src/resources/print-mail/boxes.ts">BoxCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/boxes.ts">BoxRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/boxes.ts">BoxListResponse</a></code>
- <code><a href="./src/resources/print-mail/boxes.ts">BoxDeleteResponse</a></code>
- <code><a href="./src/resources/print-mail/boxes.ts">BoxProgressionsResponse</a></code>

Methods:

- <code title="post /print-mail/v1/boxes">client.printMail.boxes.<a href="./src/resources/print-mail/boxes.ts">create</a>({ ...params }) -> BoxCreateResponse</code>
- <code title="get /print-mail/v1/boxes/{id}">client.printMail.boxes.<a href="./src/resources/print-mail/boxes.ts">retrieve</a>(id) -> BoxRetrieveResponse</code>
- <code title="get /print-mail/v1/boxes">client.printMail.boxes.<a href="./src/resources/print-mail/boxes.ts">list</a>({ ...params }) -> BoxListResponsesSkipLimit</code>
- <code title="delete /print-mail/v1/boxes/{id}">client.printMail.boxes.<a href="./src/resources/print-mail/boxes.ts">delete</a>(id) -> BoxDeleteResponse</code>
- <code title="post /print-mail/v1/boxes/{id}/progressions">client.printMail.boxes.<a href="./src/resources/print-mail/boxes.ts">progressions</a>(id) -> BoxProgressionsResponse</code>

## SnapPacks

Types:

- <code><a href="./src/resources/print-mail/snap-packs.ts">SnapPackCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/snap-packs.ts">SnapPackRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/snap-packs.ts">SnapPackListResponse</a></code>
- <code><a href="./src/resources/print-mail/snap-packs.ts">SnapPackDeleteResponse</a></code>
- <code><a href="./src/resources/print-mail/snap-packs.ts">SnapPackProgressionsResponse</a></code>
- <code><a href="./src/resources/print-mail/snap-packs.ts">SnapPackRetrieveCapabilitiesResponse</a></code>

Methods:

- <code title="post /print-mail/v1/snap_packs">client.printMail.snapPacks.<a href="./src/resources/print-mail/snap-packs.ts">create</a>({ ...params }) -> SnapPackCreateResponse</code>
- <code title="get /print-mail/v1/snap_packs/{id}">client.printMail.snapPacks.<a href="./src/resources/print-mail/snap-packs.ts">retrieve</a>(id) -> SnapPackRetrieveResponse</code>
- <code title="get /print-mail/v1/snap_packs">client.printMail.snapPacks.<a href="./src/resources/print-mail/snap-packs.ts">list</a>({ ...params }) -> SnapPackListResponsesSkipLimit</code>
- <code title="delete /print-mail/v1/snap_packs/{id}">client.printMail.snapPacks.<a href="./src/resources/print-mail/snap-packs.ts">delete</a>(id) -> SnapPackDeleteResponse</code>
- <code title="post /print-mail/v1/snap_packs/{id}/progressions">client.printMail.snapPacks.<a href="./src/resources/print-mail/snap-packs.ts">progressions</a>(id) -> SnapPackProgressionsResponse</code>
- <code title="get /print-mail/v1/snap_packs/capabilities">client.printMail.snapPacks.<a href="./src/resources/print-mail/snap-packs.ts">retrieveCapabilities</a>({ ...params }) -> SnapPackRetrieveCapabilitiesResponse</code>

## TargetedListBuilds

Types:

- <code><a href="./src/resources/print-mail/targeted-list-builds/targeted-list-builds.ts">TargetedListBuildCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/targeted-list-builds/targeted-list-builds.ts">TargetedListBuildRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/targeted-list-builds/targeted-list-builds.ts">TargetedListBuildUpdateResponse</a></code>
- <code><a href="./src/resources/print-mail/targeted-list-builds/targeted-list-builds.ts">TargetedListBuildListResponse</a></code>
- <code><a href="./src/resources/print-mail/targeted-list-builds/targeted-list-builds.ts">TargetedListBuildDeleteResponse</a></code>
- <code><a href="./src/resources/print-mail/targeted-list-builds/targeted-list-builds.ts">TargetedListBuildConfirmResponse</a></code>

Methods:

- <code title="post /print-mail/v1/targeted_list_builds">client.printMail.targetedListBuilds.<a href="./src/resources/print-mail/targeted-list-builds/targeted-list-builds.ts">create</a>({ ...params }) -> TargetedListBuildCreateResponse</code>
- <code title="get /print-mail/v1/targeted_list_builds/{id}">client.printMail.targetedListBuilds.<a href="./src/resources/print-mail/targeted-list-builds/targeted-list-builds.ts">retrieve</a>(id) -> TargetedListBuildRetrieveResponse</code>
- <code title="post /print-mail/v1/targeted_list_builds/{id}">client.printMail.targetedListBuilds.<a href="./src/resources/print-mail/targeted-list-builds/targeted-list-builds.ts">update</a>(id, { ...params }) -> TargetedListBuildUpdateResponse</code>
- <code title="get /print-mail/v1/targeted_list_builds">client.printMail.targetedListBuilds.<a href="./src/resources/print-mail/targeted-list-builds/targeted-list-builds.ts">list</a>({ ...params }) -> TargetedListBuildListResponsesSkipLimit</code>
- <code title="delete /print-mail/v1/targeted_list_builds/{id}">client.printMail.targetedListBuilds.<a href="./src/resources/print-mail/targeted-list-builds/targeted-list-builds.ts">delete</a>(id) -> TargetedListBuildDeleteResponse</code>
- <code title="post /print-mail/v1/targeted_list_builds/{id}/confirm">client.printMail.targetedListBuilds.<a href="./src/resources/print-mail/targeted-list-builds/targeted-list-builds.ts">confirm</a>(id) -> TargetedListBuildConfirmResponse</code>

### Filters

Types:

- <code><a href="./src/resources/print-mail/targeted-list-builds/filters.ts">FilterAutocompleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/targeted_list_builds/filters/autocomplete">client.printMail.targetedListBuilds.filters.<a href="./src/resources/print-mail/targeted-list-builds/filters.ts">autocomplete</a>({ ...params }) -> FilterAutocompleteResponse</code>

## TemplateEditorSessions

Types:

- <code><a href="./src/resources/print-mail/template-editor-sessions.ts">TemplateEditorSessionCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/template-editor-sessions.ts">TemplateEditorSessionListResponse</a></code>
- <code><a href="./src/resources/print-mail/template-editor-sessions.ts">TemplateEditorSessionDeleteResponse</a></code>

Methods:

- <code title="post /print-mail/v1/template_editor_sessions">client.printMail.templateEditorSessions.<a href="./src/resources/print-mail/template-editor-sessions.ts">create</a>({ ...params }) -> TemplateEditorSessionCreateResponse</code>
- <code title="get /print-mail/v1/template_editor_sessions">client.printMail.templateEditorSessions.<a href="./src/resources/print-mail/template-editor-sessions.ts">list</a>({ ...params }) -> TemplateEditorSessionListResponsesSkipLimit</code>
- <code title="delete /print-mail/v1/template_editor_sessions/{id}">client.printMail.templateEditorSessions.<a href="./src/resources/print-mail/template-editor-sessions.ts">delete</a>(id) -> TemplateEditorSessionDeleteResponse</code>

## VirtualMailboxes

Types:

- <code><a href="./src/resources/print-mail/virtual-mailboxes/virtual-mailboxes.ts">VirtualMailboxCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/virtual-mailboxes/virtual-mailboxes.ts">VirtualMailboxRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/virtual-mailboxes/virtual-mailboxes.ts">VirtualMailboxListResponse</a></code>
- <code><a href="./src/resources/print-mail/virtual-mailboxes/virtual-mailboxes.ts">VirtualMailboxRetrieveAddressResponse</a></code>

Methods:

- <code title="post /print-mail/v1/virtual_mailboxes">client.printMail.virtualMailboxes.<a href="./src/resources/print-mail/virtual-mailboxes/virtual-mailboxes.ts">create</a>({ ...params }) -> VirtualMailboxCreateResponse</code>
- <code title="get /print-mail/v1/virtual_mailboxes/{id}">client.printMail.virtualMailboxes.<a href="./src/resources/print-mail/virtual-mailboxes/virtual-mailboxes.ts">retrieve</a>(id) -> VirtualMailboxRetrieveResponse</code>
- <code title="get /print-mail/v1/virtual_mailboxes">client.printMail.virtualMailboxes.<a href="./src/resources/print-mail/virtual-mailboxes/virtual-mailboxes.ts">list</a>({ ...params }) -> VirtualMailboxListResponsesSkipLimit</code>
- <code title="get /print-mail/v1/virtual_mailboxes/{id}/address">client.printMail.virtualMailboxes.<a href="./src/resources/print-mail/virtual-mailboxes/virtual-mailboxes.ts">retrieveAddress</a>(id) -> VirtualMailboxRetrieveAddressResponse</code>

### Items

Types:

- <code><a href="./src/resources/print-mail/virtual-mailboxes/items.ts">ItemCreateResponse</a></code>
- <code><a href="./src/resources/print-mail/virtual-mailboxes/items.ts">ItemRetrieveResponse</a></code>
- <code><a href="./src/resources/print-mail/virtual-mailboxes/items.ts">ItemListResponse</a></code>

Methods:

- <code title="post /print-mail/v1/virtual_mailboxes/{id}/items">client.printMail.virtualMailboxes.items.<a href="./src/resources/print-mail/virtual-mailboxes/items.ts">create</a>(id, { ...params }) -> ItemCreateResponse</code>
- <code title="get /print-mail/v1/virtual_mailboxes/{id}/items/{itemID}">client.printMail.virtualMailboxes.items.<a href="./src/resources/print-mail/virtual-mailboxes/items.ts">retrieve</a>(itemID, { ...params }) -> ItemRetrieveResponse</code>
- <code title="get /print-mail/v1/virtual_mailboxes/{id}/items">client.printMail.virtualMailboxes.items.<a href="./src/resources/print-mail/virtual-mailboxes/items.ts">list</a>(id, { ...params }) -> ItemListResponsesSkipLimit</code>
