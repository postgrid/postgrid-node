// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BankAccountsAPI from './bank-accounts';
import {
  BankAccount,
  BankAccountCountryCode,
  BankAccountCreateParams,
  BankAccountDeleteResponse,
  BankAccountListParams,
  BankAccounts,
  BankAccountsSkipLimit,
} from './bank-accounts';
import * as CampaignsAPI from './campaigns';
import {
  Campaign,
  CampaignCreateParams,
  CampaignDeleteResponse,
  CampaignListParams,
  CampaignSendParams,
  CampaignUpdateParams,
  Campaigns,
  CampaignsSkipLimit,
} from './campaigns';
import * as ChequesAPI from './cheques';
import {
  Cheque,
  ChequeCreateParams,
  ChequeListParams,
  ChequeRetrieveURLResponse,
  ChequeSize,
  Cheques,
  ChequesSkipLimit,
  DigitalOnly,
} from './cheques';
import * as ContactsAPI from './contacts';
import {
  Contact,
  ContactCreate,
  ContactCreateParams,
  ContactDeleteResponse,
  ContactListParams,
  Contacts,
  ContactsSkipLimit,
} from './contacts';
import * as LettersAPI from './letters';
import {
  AddressPlacement,
  AttachedPdf,
  Letter,
  LetterCreateParams,
  LetterListParams,
  LetterRetrieveURLResponse,
  LetterSize,
  Letters,
  LettersSkipLimit,
  PlasticCard,
} from './letters';
import * as MailingListImportsAPI from './mailing-list-imports';
import {
  FileType,
  MailingListImportCreateParams,
  MailingListImportDeleteResponse,
  MailingListImportListParams,
  MailingListImportResponse,
  MailingListImportResponsesSkipLimit,
  MailingListImportUpdateParams,
  MailingListImports,
  VerificationStatusCount,
} from './mailing-list-imports';
import * as MailingListsAPI from './mailing-lists';
import {
  MailingList,
  MailingListCreateParams,
  MailingListDeleteResponse,
  MailingListJobsParams,
  MailingListListParams,
  MailingListUpdate,
  MailingListUpdateParams,
  MailingLists,
  MailingListsSkipLimit,
} from './mailing-lists';
import * as PostcardsAPI from './postcards';
import {
  Postcard,
  PostcardCreateParams,
  PostcardListParams,
  PostcardRetrieveURLResponse,
  Postcards,
  PostcardsSkipLimit,
} from './postcards';
import * as SelfMailersAPI from './self-mailers';
import {
  SelfMailer,
  SelfMailerCreateParams,
  SelfMailerListParams,
  SelfMailerRetrieveURLResponse,
  SelfMailers,
  SelfMailersSkipLimit,
} from './self-mailers';
import * as SubOrganizationsAPI from './sub-organizations';
import {
  EmailPreferences,
  SubOrganization,
  SubOrganizationListParams,
  SubOrganizationRetrieveUsersParams,
  SubOrganizationRetrieveUsersResponse,
  SubOrganizationUpdateParams,
  SubOrganizationUpdateResponse,
  SubOrganizations,
  SubOrganizationsSkipLimit,
} from './sub-organizations';
import * as TemplatesAPI from './templates';
import {
  Template,
  TemplateCreateParams,
  TemplateDeleteResponse,
  TemplateListParams,
  TemplateUpdateParams,
  Templates,
  TemplatesSkipLimit,
} from './templates';
import * as OrderProfilesAPI from './order-profiles/order-profiles';
import { OrderProfiles } from './order-profiles/order-profiles';
import * as ReportsAPI from './reports/reports';
import {
  DeletedResponse,
  Report,
  ReportCreateParams,
  ReportListParams,
  ReportSampleParams,
  ReportUpdateParams,
  Reports,
  ReportsSkipLimit,
} from './reports/reports';

export class PrintMail extends APIResource {
  bankAccounts: BankAccountsAPI.BankAccounts = new BankAccountsAPI.BankAccounts(this._client);
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
  cheques: ChequesAPI.Cheques = new ChequesAPI.Cheques(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);
  letters: LettersAPI.Letters = new LettersAPI.Letters(this._client);
  mailingListImports: MailingListImportsAPI.MailingListImports = new MailingListImportsAPI.MailingListImports(
    this._client,
  );
  mailingLists: MailingListsAPI.MailingLists = new MailingListsAPI.MailingLists(this._client);
  orderProfiles: OrderProfilesAPI.OrderProfiles = new OrderProfilesAPI.OrderProfiles(this._client);
  postcards: PostcardsAPI.Postcards = new PostcardsAPI.Postcards(this._client);
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
  selfMailers: SelfMailersAPI.SelfMailers = new SelfMailersAPI.SelfMailers(this._client);
  subOrganizations: SubOrganizationsAPI.SubOrganizations = new SubOrganizationsAPI.SubOrganizations(
    this._client,
  );
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
}

export interface ContactCreateWithCompanyName {
  /**
   * The first line of the contact's address.
   */
  addressLine1: string;

  companyName: string;

  /**
   * The ISO 3611-1 country code of the contact's address.
   */
  countryCode: string;

  /**
   * Second line of the contact's address, if applicable.
   */
  addressLine2?: string;

  /**
   * The city of the contact's address.
   */
  city?: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * Email of the contact.
   */
  email?: string;

  /**
   * First name of the contact.
   */
  firstName?: string;

  /**
   * If `true`, PostGrid will force this contact to have an `addressStatus` of
   * `verified` even if our address verification system says otherwise.
   */
  forceVerifiedStatus?: boolean;

  /**
   * Job title of the contact.
   */
  jobTitle?: string;

  /**
   * Last name of the contact.
   */
  lastName?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Phone number of the contact.
   */
  phoneNumber?: string;

  /**
   * The postal or ZIP code of the contact's address.
   */
  postalOrZip?: string;

  /**
   * Province or state of the contact's address.
   */
  provinceOrState?: string;

  /**
   * If `true`, PostGrid will skip running this contact's address through our address
   * verification system.
   */
  skipVerification?: boolean;
}

export interface ContactCreateWithFirstName {
  /**
   * The first line of the contact's address.
   */
  addressLine1: string;

  /**
   * The ISO 3611-1 country code of the contact's address.
   */
  countryCode: string;

  firstName: string;

  /**
   * Second line of the contact's address, if applicable.
   */
  addressLine2?: string;

  /**
   * The city of the contact's address.
   */
  city?: string;

  /**
   * Company name of the contact.
   */
  companyName?: string;

  /**
   * An optional string describing this resource. Will be visible in the API and the
   * dashboard.
   */
  description?: string;

  /**
   * Email of the contact.
   */
  email?: string;

  /**
   * If `true`, PostGrid will force this contact to have an `addressStatus` of
   * `verified` even if our address verification system says otherwise.
   */
  forceVerifiedStatus?: boolean;

  /**
   * Job title of the contact.
   */
  jobTitle?: string;

  /**
   * Last name of the contact.
   */
  lastName?: string;

  /**
   * See the section on Metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Phone number of the contact.
   */
  phoneNumber?: string;

  /**
   * The postal or ZIP code of the contact's address.
   */
  postalOrZip?: string;

  /**
   * Province or state of the contact's address.
   */
  provinceOrState?: string;

  /**
   * If `true`, PostGrid will skip running this contact's address through our address
   * verification system.
   */
  skipVerification?: boolean;
}

PrintMail.BankAccounts = BankAccounts;
PrintMail.Campaigns = Campaigns;
PrintMail.Cheques = Cheques;
PrintMail.Contacts = Contacts;
PrintMail.Letters = Letters;
PrintMail.MailingListImports = MailingListImports;
PrintMail.MailingLists = MailingLists;
PrintMail.OrderProfiles = OrderProfiles;
PrintMail.Postcards = Postcards;
PrintMail.Reports = Reports;
PrintMail.SelfMailers = SelfMailers;
PrintMail.SubOrganizations = SubOrganizations;
PrintMail.Templates = Templates;

export declare namespace PrintMail {
  export {
    type ContactCreateWithCompanyName as ContactCreateWithCompanyName,
    type ContactCreateWithFirstName as ContactCreateWithFirstName,
  };

  export {
    BankAccounts as BankAccounts,
    type BankAccount as BankAccount,
    type BankAccountCountryCode as BankAccountCountryCode,
    type BankAccountDeleteResponse as BankAccountDeleteResponse,
    type BankAccountsSkipLimit as BankAccountsSkipLimit,
    type BankAccountCreateParams as BankAccountCreateParams,
    type BankAccountListParams as BankAccountListParams,
  };

  export {
    Campaigns as Campaigns,
    type Campaign as Campaign,
    type CampaignDeleteResponse as CampaignDeleteResponse,
    type CampaignsSkipLimit as CampaignsSkipLimit,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignSendParams as CampaignSendParams,
  };

  export {
    Cheques as Cheques,
    type Cheque as Cheque,
    type ChequeSize as ChequeSize,
    type DigitalOnly as DigitalOnly,
    type ChequeRetrieveURLResponse as ChequeRetrieveURLResponse,
    type ChequesSkipLimit as ChequesSkipLimit,
    type ChequeCreateParams as ChequeCreateParams,
    type ChequeListParams as ChequeListParams,
  };

  export {
    Contacts as Contacts,
    type Contact as Contact,
    type ContactCreate as ContactCreate,
    type ContactDeleteResponse as ContactDeleteResponse,
    type ContactsSkipLimit as ContactsSkipLimit,
    type ContactCreateParams as ContactCreateParams,
    type ContactListParams as ContactListParams,
  };

  export {
    Letters as Letters,
    type AddressPlacement as AddressPlacement,
    type AttachedPdf as AttachedPdf,
    type Letter as Letter,
    type LetterSize as LetterSize,
    type PlasticCard as PlasticCard,
    type LetterRetrieveURLResponse as LetterRetrieveURLResponse,
    type LettersSkipLimit as LettersSkipLimit,
    type LetterCreateParams as LetterCreateParams,
    type LetterListParams as LetterListParams,
  };

  export {
    MailingListImports as MailingListImports,
    type FileType as FileType,
    type MailingListImportResponse as MailingListImportResponse,
    type VerificationStatusCount as VerificationStatusCount,
    type MailingListImportDeleteResponse as MailingListImportDeleteResponse,
    type MailingListImportResponsesSkipLimit as MailingListImportResponsesSkipLimit,
    type MailingListImportCreateParams as MailingListImportCreateParams,
    type MailingListImportUpdateParams as MailingListImportUpdateParams,
    type MailingListImportListParams as MailingListImportListParams,
  };

  export {
    MailingLists as MailingLists,
    type MailingList as MailingList,
    type MailingListUpdate as MailingListUpdate,
    type MailingListDeleteResponse as MailingListDeleteResponse,
    type MailingListsSkipLimit as MailingListsSkipLimit,
    type MailingListCreateParams as MailingListCreateParams,
    type MailingListUpdateParams as MailingListUpdateParams,
    type MailingListListParams as MailingListListParams,
    type MailingListJobsParams as MailingListJobsParams,
  };

  export { OrderProfiles as OrderProfiles };

  export {
    Postcards as Postcards,
    type Postcard as Postcard,
    type PostcardRetrieveURLResponse as PostcardRetrieveURLResponse,
    type PostcardsSkipLimit as PostcardsSkipLimit,
    type PostcardCreateParams as PostcardCreateParams,
    type PostcardListParams as PostcardListParams,
  };

  export {
    Reports as Reports,
    type DeletedResponse as DeletedResponse,
    type Report as Report,
    type ReportsSkipLimit as ReportsSkipLimit,
    type ReportCreateParams as ReportCreateParams,
    type ReportUpdateParams as ReportUpdateParams,
    type ReportListParams as ReportListParams,
    type ReportSampleParams as ReportSampleParams,
  };

  export {
    SelfMailers as SelfMailers,
    type SelfMailer as SelfMailer,
    type SelfMailerRetrieveURLResponse as SelfMailerRetrieveURLResponse,
    type SelfMailersSkipLimit as SelfMailersSkipLimit,
    type SelfMailerCreateParams as SelfMailerCreateParams,
    type SelfMailerListParams as SelfMailerListParams,
  };

  export {
    SubOrganizations as SubOrganizations,
    type EmailPreferences as EmailPreferences,
    type SubOrganization as SubOrganization,
    type SubOrganizationUpdateResponse as SubOrganizationUpdateResponse,
    type SubOrganizationRetrieveUsersResponse as SubOrganizationRetrieveUsersResponse,
    type SubOrganizationsSkipLimit as SubOrganizationsSkipLimit,
    type SubOrganizationUpdateParams as SubOrganizationUpdateParams,
    type SubOrganizationListParams as SubOrganizationListParams,
    type SubOrganizationRetrieveUsersParams as SubOrganizationRetrieveUsersParams,
  };

  export {
    Templates as Templates,
    type Template as Template,
    type TemplateDeleteResponse as TemplateDeleteResponse,
    type TemplatesSkipLimit as TemplatesSkipLimit,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateListParams as TemplateListParams,
  };
}
