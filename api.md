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
