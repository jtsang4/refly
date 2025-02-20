// This file is auto-generated by @hey-api/openapi-ts

import {
  createClient,
  createConfig,
  type Options,
  formDataBodySerializer,
} from '@hey-api/client-fetch';
import type {
  GetAuthConfigError,
  GetAuthConfigResponse,
  RefreshTokenError,
  RefreshTokenResponse,
  EmailSignupData2,
  EmailSignupError,
  EmailSignupResponse2,
  EmailLoginData2,
  EmailLoginError,
  EmailLoginResponse2,
  CreateVerificationData2,
  CreateVerificationError,
  CreateVerificationResponse2,
  ResendVerificationData,
  ResendVerificationError,
  ResendVerificationResponse,
  CheckVerificationData,
  CheckVerificationError,
  CheckVerificationResponse,
  LogoutError,
  LogoutResponse,
  GetCollabTokenError,
  GetCollabTokenResponse2,
  ListCanvasesData,
  ListCanvasesError,
  ListCanvasesResponse,
  GetCanvasDetailData,
  GetCanvasDetailError,
  GetCanvasDetailResponse2,
  GetCanvasDataData,
  GetCanvasDataError,
  GetCanvasDataResponse,
  ExportCanvasData,
  ExportCanvasError,
  ExportCanvasResponse2,
  ImportCanvasData,
  ImportCanvasError,
  ImportCanvasResponse,
  CreateCanvasData,
  CreateCanvasError,
  CreateCanvasResponse,
  DuplicateCanvasData,
  DuplicateCanvasError,
  DuplicateCanvasResponse,
  UpdateCanvasData,
  UpdateCanvasError,
  UpdateCanvasResponse,
  DeleteCanvasData,
  DeleteCanvasError,
  DeleteCanvasResponse,
  AutoNameCanvasData,
  AutoNameCanvasError,
  AutoNameCanvasResponse2,
  ListResourcesData,
  ListResourcesError,
  ListResourcesResponse,
  GetResourceDetailData,
  GetResourceDetailError,
  GetResourceDetailResponse2,
  UpdateResourceData,
  UpdateResourceError,
  UpdateResourceResponse,
  CreateResourceData,
  CreateResourceError,
  CreateResourceResponse,
  CreateResourceWithFileData,
  CreateResourceWithFileError,
  CreateResourceWithFileResponse,
  BatchCreateResourceData,
  BatchCreateResourceError,
  BatchCreateResourceResponse2,
  ReindexResourceData,
  ReindexResourceError,
  ReindexResourceResponse2,
  DeleteResourceData,
  DeleteResourceError,
  DeleteResourceResponse,
  ListDocumentsData,
  ListDocumentsError,
  ListDocumentsResponse,
  GetDocumentDetailData,
  GetDocumentDetailError,
  GetDocumentDetailResponse2,
  UpdateDocumentData,
  UpdateDocumentError,
  UpdateDocumentResponse,
  CreateDocumentData,
  CreateDocumentError,
  CreateDocumentResponse,
  DeleteDocumentData,
  DeleteDocumentError,
  DeleteDocumentResponse,
  BatchUpdateDocumentData,
  BatchUpdateDocumentError,
  BatchUpdateDocumentResponse,
  QueryReferencesData,
  QueryReferencesError,
  QueryReferencesResponse2,
  AddReferencesData,
  AddReferencesError,
  AddReferencesResponse2,
  DeleteReferencesData,
  DeleteReferencesError,
  DeleteReferencesResponse,
  ListLabelClassesData,
  ListLabelClassesError,
  ListLabelClassesResponse2,
  CreateLabelClassData,
  CreateLabelClassError,
  CreateLabelClassResponse,
  UpdateLabelClassData,
  UpdateLabelClassError,
  UpdateLabelClassResponse,
  DeleteLabelClassData,
  DeleteLabelClassError,
  DeleteLabelClassResponse,
  ListLabelInstancesData,
  ListLabelInstancesError,
  ListLabelInstancesResponse2,
  CreateLabelInstanceData,
  CreateLabelInstanceError,
  CreateLabelInstanceResponse,
  UpdateLabelInstanceData,
  UpdateLabelInstanceError,
  UpdateLabelInstanceResponse,
  DeleteLabelInstanceData,
  DeleteLabelInstanceError,
  DeleteLabelInstanceResponse,
  ListActionsError,
  ListActionsResponse,
  GetActionResultData,
  GetActionResultError,
  GetActionResultResponse2,
  ListSkillsError,
  ListSkillsResponse,
  InvokeSkillData,
  InvokeSkillError,
  InvokeSkillResponse2,
  StreamInvokeSkillData,
  StreamInvokeSkillError,
  StreamInvokeSkillResponse,
  ListSkillInstancesData,
  ListSkillInstancesError,
  ListSkillInstancesResponse,
  CreateSkillInstanceData,
  CreateSkillInstanceError,
  CreateSkillInstanceResponse2,
  UpdateSkillInstanceData,
  UpdateSkillInstanceError,
  UpdateSkillInstanceResponse2,
  PinSkillInstanceData,
  PinSkillInstanceError,
  PinSkillInstanceResponse,
  UnpinSkillInstanceData,
  UnpinSkillInstanceError,
  UnpinSkillInstanceResponse,
  DeleteSkillInstanceData,
  DeleteSkillInstanceError,
  DeleteSkillInstanceResponse,
  ListSkillTriggersData,
  ListSkillTriggersError,
  ListSkillTriggersResponse,
  CreateSkillTriggerData,
  CreateSkillTriggerError,
  CreateSkillTriggerResponse2,
  UpdateSkillTriggerData,
  UpdateSkillTriggerError,
  UpdateSkillTriggerResponse2,
  DeleteSkillTriggerData,
  DeleteSkillTriggerError,
  DeleteSkillTriggerResponse,
  GetSettingsError,
  GetSettingsResponse,
  UpdateSettingsData,
  UpdateSettingsError,
  UpdateSettingsResponse,
  CheckSettingsFieldData,
  CheckSettingsFieldError,
  CheckSettingsFieldResponse2,
  GetSubscriptionPlansError,
  GetSubscriptionPlansResponse2,
  GetSubscriptionUsageError,
  GetSubscriptionUsageResponse2,
  ListModelsError,
  ListModelsResponse2,
  CreateCheckoutSessionData,
  CreateCheckoutSessionError,
  CreateCheckoutSessionResponse2,
  CreatePortalSessionError,
  CreatePortalSessionResponse2,
  SearchData,
  SearchError,
  SearchResponse2,
  MultiLingualWebSearchData,
  MultiLingualWebSearchError,
  MultiLingualWebSearchResponse2,
  ScrapeData,
  ScrapeError,
  ScrapeResponse,
  UploadData,
  UploadError,
  UploadResponse2,
  ServeStaticError,
  ServeStaticResponse,
  ConvertData,
  ConvertError,
  ConvertResponse2,
} from './types.gen';

export const client = createClient(createConfig());

/**
 * Get auth config
 * Get auth config
 */
export const getAuthConfig = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<GetAuthConfigResponse, GetAuthConfigError, ThrowOnError>({
    ...options,
    url: '/auth/config',
  });
};

/**
 * Refresh token
 * Refresh token
 */
export const refreshToken = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).post<RefreshTokenResponse, RefreshTokenError, ThrowOnError>({
    ...options,
    url: '/auth/refreshToken',
  });
};

/**
 * Sign up with email
 * Sign up with email
 */
export const emailSignup = <ThrowOnError extends boolean = false>(
  options: Options<EmailSignupData2, ThrowOnError>,
) => {
  return (options?.client ?? client).post<EmailSignupResponse2, EmailSignupError, ThrowOnError>({
    ...options,
    url: '/auth/email/signup',
  });
};

/**
 * Login with email
 * Login with email
 */
export const emailLogin = <ThrowOnError extends boolean = false>(
  options: Options<EmailLoginData2, ThrowOnError>,
) => {
  return (options?.client ?? client).post<EmailLoginResponse2, EmailLoginError, ThrowOnError>({
    ...options,
    url: '/auth/email/login',
  });
};

/**
 * Create verification session
 * Create a verification session
 */
export const createVerification = <ThrowOnError extends boolean = false>(
  options: Options<CreateVerificationData2, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateVerificationResponse2,
    CreateVerificationError,
    ThrowOnError
  >({
    ...options,
    url: '/auth/verification/create',
  });
};

/**
 * Resend verification
 * Resend verification
 */
export const resendVerification = <ThrowOnError extends boolean = false>(
  options: Options<ResendVerificationData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ResendVerificationResponse,
    ResendVerificationError,
    ThrowOnError
  >({
    ...options,
    url: '/auth/verification/resend',
  });
};

/**
 * Verify authentication session
 * Verify account creation
 */
export const checkVerification = <ThrowOnError extends boolean = false>(
  options: Options<CheckVerificationData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CheckVerificationResponse,
    CheckVerificationError,
    ThrowOnError
  >({
    ...options,
    url: '/auth/verification/check',
  });
};

/**
 * Logout
 * Logout
 */
export const logout = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).post<LogoutResponse, LogoutError, ThrowOnError>({
    ...options,
    url: '/auth/logout',
  });
};

/**
 * Get collab token
 * Get collab token
 */
export const getCollabToken = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetCollabTokenResponse2,
    GetCollabTokenError,
    ThrowOnError
  >({
    ...options,
    url: '/collab/getToken',
  });
};

/**
 * List user canvases
 * List all canvases for a user
 */
export const listCanvases = <ThrowOnError extends boolean = false>(
  options?: Options<ListCanvasesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<ListCanvasesResponse, ListCanvasesError, ThrowOnError>({
    ...options,
    url: '/canvas/list',
  });
};

/**
 * Get canvas detail
 * Get canvas detail
 */
export const getCanvasDetail = <ThrowOnError extends boolean = false>(
  options: Options<GetCanvasDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetCanvasDetailResponse2,
    GetCanvasDetailError,
    ThrowOnError
  >({
    ...options,
    url: '/canvas/detail',
  });
};

/**
 * Get canvas data
 * Get public canvas data without checking user identity
 */
export const getCanvasData = <ThrowOnError extends boolean = false>(
  options: Options<GetCanvasDataData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<GetCanvasDataResponse, GetCanvasDataError, ThrowOnError>({
    ...options,
    url: '/canvas/data',
  });
};

/**
 * Export canvas
 * Export canvas
 */
export const exportCanvas = <ThrowOnError extends boolean = false>(
  options: Options<ExportCanvasData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<ExportCanvasResponse2, ExportCanvasError, ThrowOnError>({
    ...options,
    url: '/canvas/export',
  });
};

/**
 * Import canvas
 * Import canvas
 */
export const importCanvas = <ThrowOnError extends boolean = false>(
  options: Options<ImportCanvasData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<ImportCanvasResponse, ImportCanvasError, ThrowOnError>({
    ...options,
    url: '/canvas/import',
  });
};

/**
 * Create canvas
 * Create a new canvas
 */
export const createCanvas = <ThrowOnError extends boolean = false>(
  options: Options<CreateCanvasData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<CreateCanvasResponse, CreateCanvasError, ThrowOnError>({
    ...options,
    url: '/canvas/create',
  });
};

/**
 * Duplicate canvas
 * Duplicate an existing canvas
 */
export const duplicateCanvas = <ThrowOnError extends boolean = false>(
  options: Options<DuplicateCanvasData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    DuplicateCanvasResponse,
    DuplicateCanvasError,
    ThrowOnError
  >({
    ...options,
    url: '/canvas/duplicate',
  });
};

/**
 * Update canvas
 * Update an existing canvas
 */
export const updateCanvas = <ThrowOnError extends boolean = false>(
  options: Options<UpdateCanvasData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<UpdateCanvasResponse, UpdateCanvasError, ThrowOnError>({
    ...options,
    url: '/canvas/update',
  });
};

/**
 * Delete canvas
 * Delete an existing canvas
 */
export const deleteCanvas = <ThrowOnError extends boolean = false>(
  options: Options<DeleteCanvasData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<DeleteCanvasResponse, DeleteCanvasError, ThrowOnError>({
    ...options,
    url: '/canvas/delete',
  });
};

/**
 * Auto name canvas
 * Auto name a canvas
 */
export const autoNameCanvas = <ThrowOnError extends boolean = false>(
  options: Options<AutoNameCanvasData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    AutoNameCanvasResponse2,
    AutoNameCanvasError,
    ThrowOnError
  >({
    ...options,
    url: '/canvas/autoName',
  });
};

/**
 * List resources
 * List all resources
 */
export const listResources = <ThrowOnError extends boolean = false>(
  options?: Options<ListResourcesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<ListResourcesResponse, ListResourcesError, ThrowOnError>({
    ...options,
    url: '/knowledge/resource/list',
  });
};

/**
 * Get resource detail
 * Return resource detail along with its document content
 */
export const getResourceDetail = <ThrowOnError extends boolean = false>(
  options: Options<GetResourceDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetResourceDetailResponse2,
    GetResourceDetailError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/resource/detail',
  });
};

/**
 * Update resource
 * Update an existing resource
 */
export const updateResource = <ThrowOnError extends boolean = false>(
  options: Options<UpdateResourceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    UpdateResourceResponse,
    UpdateResourceError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/resource/update',
  });
};

/**
 * Create new resource
 * Create a new resource
 */
export const createResource = <ThrowOnError extends boolean = false>(
  options: Options<CreateResourceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateResourceResponse,
    CreateResourceError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/resource/create',
  });
};

/**
 * Create new resource with file upload
 * Create a new resource with file upload in a single request
 */
export const createResourceWithFile = <ThrowOnError extends boolean = false>(
  options: Options<CreateResourceWithFileData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateResourceWithFileResponse,
    CreateResourceWithFileError,
    ThrowOnError
  >({
    ...options,
    ...formDataBodySerializer,
    headers: {
      'Content-Type': null,
      ...options?.headers,
    },
    url: '/knowledge/resource/createWithFile',
  });
};

/**
 * Batch create new resources
 * Batch create a new resource
 */
export const batchCreateResource = <ThrowOnError extends boolean = false>(
  options: Options<BatchCreateResourceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    BatchCreateResourceResponse2,
    BatchCreateResourceError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/resource/batchCreate',
  });
};

/**
 * Reindex resource
 * Reindex an existing resource
 */
export const reindexResource = <ThrowOnError extends boolean = false>(
  options: Options<ReindexResourceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ReindexResourceResponse2,
    ReindexResourceError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/resource/reindex',
  });
};

/**
 * Delete resource
 * Delete an existing resource
 */
export const deleteResource = <ThrowOnError extends boolean = false>(
  options: Options<DeleteResourceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    DeleteResourceResponse,
    DeleteResourceError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/resource/delete',
  });
};

/**
 * List user documents
 * List all documents for a user
 */
export const listDocuments = <ThrowOnError extends boolean = false>(
  options?: Options<ListDocumentsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<ListDocumentsResponse, ListDocumentsError, ThrowOnError>({
    ...options,
    url: '/knowledge/document/list',
  });
};

/**
 * Get canvas detail
 * Return document detail
 */
export const getDocumentDetail = <ThrowOnError extends boolean = false>(
  options: Options<GetDocumentDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetDocumentDetailResponse2,
    GetDocumentDetailError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/document/detail',
  });
};

/**
 * Update canvas
 * Update an existing document
 */
export const updateDocument = <ThrowOnError extends boolean = false>(
  options: Options<UpdateDocumentData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    UpdateDocumentResponse,
    UpdateDocumentError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/document/update',
  });
};

/**
 * Create new canvas
 * Create a new document
 */
export const createDocument = <ThrowOnError extends boolean = false>(
  options: Options<CreateDocumentData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateDocumentResponse,
    CreateDocumentError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/document/create',
  });
};

/**
 * Delete canvas
 * Delete an existing document
 */
export const deleteDocument = <ThrowOnError extends boolean = false>(
  options: Options<DeleteDocumentData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    DeleteDocumentResponse,
    DeleteDocumentError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/document/delete',
  });
};

/**
 * Batch update documents
 * Batch update existing documents
 */
export const batchUpdateDocument = <ThrowOnError extends boolean = false>(
  options: Options<BatchUpdateDocumentData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    BatchUpdateDocumentResponse,
    BatchUpdateDocumentError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/document/batchUpdate',
  });
};

/**
 * Query references
 * Query references by source or target entity
 */
export const queryReferences = <ThrowOnError extends boolean = false>(
  options: Options<QueryReferencesData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    QueryReferencesResponse2,
    QueryReferencesError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/reference/query',
  });
};

/**
 * Add references
 * Add references between source and target entities
 */
export const addReferences = <ThrowOnError extends boolean = false>(
  options: Options<AddReferencesData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<AddReferencesResponse2, AddReferencesError, ThrowOnError>(
    {
      ...options,
      url: '/knowledge/reference/add',
    },
  );
};

/**
 * Delete references
 * Delete references between source and target entities
 */
export const deleteReferences = <ThrowOnError extends boolean = false>(
  options: Options<DeleteReferencesData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    DeleteReferencesResponse,
    DeleteReferencesError,
    ThrowOnError
  >({
    ...options,
    url: '/knowledge/reference/delete',
  });
};

/**
 * List label classes
 * List all label classes
 */
export const listLabelClasses = <ThrowOnError extends boolean = false>(
  options?: Options<ListLabelClassesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ListLabelClassesResponse2,
    ListLabelClassesError,
    ThrowOnError
  >({
    ...options,
    url: '/label/class/list',
  });
};

/**
 * Create new label class
 * Create a new label class
 */
export const createLabelClass = <ThrowOnError extends boolean = false>(
  options: Options<CreateLabelClassData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateLabelClassResponse,
    CreateLabelClassError,
    ThrowOnError
  >({
    ...options,
    url: '/label/class/new',
  });
};

/**
 * Update label class
 * Update an existing label class
 */
export const updateLabelClass = <ThrowOnError extends boolean = false>(
  options: Options<UpdateLabelClassData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    UpdateLabelClassResponse,
    UpdateLabelClassError,
    ThrowOnError
  >({
    ...options,
    url: '/label/class/update',
  });
};

/**
 * Delete label class
 * Delete an existing label class
 */
export const deleteLabelClass = <ThrowOnError extends boolean = false>(
  options: Options<DeleteLabelClassData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    DeleteLabelClassResponse,
    DeleteLabelClassError,
    ThrowOnError
  >({
    ...options,
    url: '/label/class/delete',
  });
};

/**
 * List labels
 * List all label instances
 */
export const listLabelInstances = <ThrowOnError extends boolean = false>(
  options?: Options<ListLabelInstancesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ListLabelInstancesResponse2,
    ListLabelInstancesError,
    ThrowOnError
  >({
    ...options,
    url: '/label/instance/list',
  });
};

/**
 * Create new label instance
 * Create new label instance
 */
export const createLabelInstance = <ThrowOnError extends boolean = false>(
  options: Options<CreateLabelInstanceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateLabelInstanceResponse,
    CreateLabelInstanceError,
    ThrowOnError
  >({
    ...options,
    url: '/label/instance/new',
  });
};

/**
 * Update label
 * Update an existing label instance
 */
export const updateLabelInstance = <ThrowOnError extends boolean = false>(
  options: Options<UpdateLabelInstanceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    UpdateLabelInstanceResponse,
    UpdateLabelInstanceError,
    ThrowOnError
  >({
    ...options,
    url: '/label/instance/update',
  });
};

/**
 * Delete label
 * Delete an existing label
 */
export const deleteLabelInstance = <ThrowOnError extends boolean = false>(
  options: Options<DeleteLabelInstanceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    DeleteLabelInstanceResponse,
    DeleteLabelInstanceError,
    ThrowOnError
  >({
    ...options,
    url: '/label/instance/delete',
  });
};

/**
 * List actions
 * List all actions
 */
export const listActions = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<ListActionsResponse, ListActionsError, ThrowOnError>({
    ...options,
    url: '/action/list',
  });
};

/**
 * Get action result
 * Get action result by result ID
 */
export const getActionResult = <ThrowOnError extends boolean = false>(
  options: Options<GetActionResultData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetActionResultResponse2,
    GetActionResultError,
    ThrowOnError
  >({
    ...options,
    url: '/action/result',
  });
};

/**
 * List skills
 * List all skills
 */
export const listSkills = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<ListSkillsResponse, ListSkillsError, ThrowOnError>({
    ...options,
    url: '/skill/list',
  });
};

/**
 * Invoke skill
 * Invoke a skill
 */
export const invokeSkill = <ThrowOnError extends boolean = false>(
  options: Options<InvokeSkillData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<InvokeSkillResponse2, InvokeSkillError, ThrowOnError>({
    ...options,
    url: '/skill/invoke',
  });
};

/**
 * Stream invoke skill
 * Invoke a skill and return SSE stream
 */
export const streamInvokeSkill = <ThrowOnError extends boolean = false>(
  options: Options<StreamInvokeSkillData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    StreamInvokeSkillResponse,
    StreamInvokeSkillError,
    ThrowOnError
  >({
    ...options,
    url: '/skill/streamInvoke',
  });
};

/**
 * List skill instances
 * List skill instances for a user
 */
export const listSkillInstances = <ThrowOnError extends boolean = false>(
  options?: Options<ListSkillInstancesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ListSkillInstancesResponse,
    ListSkillInstancesError,
    ThrowOnError
  >({
    ...options,
    url: '/skill/instance/list',
  });
};

/**
 * Create new skill instance
 * Create a new skill instance for user
 */
export const createSkillInstance = <ThrowOnError extends boolean = false>(
  options: Options<CreateSkillInstanceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateSkillInstanceResponse2,
    CreateSkillInstanceError,
    ThrowOnError
  >({
    ...options,
    url: '/skill/instance/new',
  });
};

/**
 * Update skill instance
 * Update an existing skill instance
 */
export const updateSkillInstance = <ThrowOnError extends boolean = false>(
  options: Options<UpdateSkillInstanceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    UpdateSkillInstanceResponse2,
    UpdateSkillInstanceError,
    ThrowOnError
  >({
    ...options,
    url: '/skill/instance/update',
  });
};

/**
 * Pin skill instance
 * Pin an existing skill instance
 */
export const pinSkillInstance = <ThrowOnError extends boolean = false>(
  options: Options<PinSkillInstanceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    PinSkillInstanceResponse,
    PinSkillInstanceError,
    ThrowOnError
  >({
    ...options,
    url: '/skill/instance/pin',
  });
};

/**
 * Unpin skill instance
 * Unpin an existing skill instance
 */
export const unpinSkillInstance = <ThrowOnError extends boolean = false>(
  options: Options<UnpinSkillInstanceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    UnpinSkillInstanceResponse,
    UnpinSkillInstanceError,
    ThrowOnError
  >({
    ...options,
    url: '/skill/instance/unpin',
  });
};

/**
 * Delete skill instance
 * Delete an existing skill instance
 */
export const deleteSkillInstance = <ThrowOnError extends boolean = false>(
  options: Options<DeleteSkillInstanceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    DeleteSkillInstanceResponse,
    DeleteSkillInstanceError,
    ThrowOnError
  >({
    ...options,
    url: '/skill/instance/delete',
  });
};

/**
 * List skill triggers
 * List all skill triggers
 */
export const listSkillTriggers = <ThrowOnError extends boolean = false>(
  options?: Options<ListSkillTriggersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ListSkillTriggersResponse,
    ListSkillTriggersError,
    ThrowOnError
  >({
    ...options,
    url: '/skill/trigger/list',
  });
};

/**
 * Create new trigger
 * Create a new trigger
 */
export const createSkillTrigger = <ThrowOnError extends boolean = false>(
  options: Options<CreateSkillTriggerData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateSkillTriggerResponse2,
    CreateSkillTriggerError,
    ThrowOnError
  >({
    ...options,
    url: '/skill/trigger/new',
  });
};

/**
 * Update trigger
 * Update an existing trigger
 */
export const updateSkillTrigger = <ThrowOnError extends boolean = false>(
  options: Options<UpdateSkillTriggerData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    UpdateSkillTriggerResponse2,
    UpdateSkillTriggerError,
    ThrowOnError
  >({
    ...options,
    url: '/skill/trigger/update',
  });
};

/**
 * Delete trigger
 * Delete an existing trigger
 */
export const deleteSkillTrigger = <ThrowOnError extends boolean = false>(
  options: Options<DeleteSkillTriggerData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    DeleteSkillTriggerResponse,
    DeleteSkillTriggerError,
    ThrowOnError
  >({
    ...options,
    url: '/skill/trigger/delete',
  });
};

/**
 * Get user settings
 * Return settings for current user
 */
export const getSettings = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<GetSettingsResponse, GetSettingsError, ThrowOnError>({
    ...options,
    url: '/user/settings',
  });
};

/**
 * Update user settings
 * Update settings for current user
 */
export const updateSettings = <ThrowOnError extends boolean = false>(
  options: Options<UpdateSettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<UpdateSettingsResponse, UpdateSettingsError, ThrowOnError>(
    {
      ...options,
      url: '/user/settings',
    },
  );
};

/**
 * Check settings field
 * Given a settings field, check if the given value is valid
 */
export const checkSettingsField = <ThrowOnError extends boolean = false>(
  options: Options<CheckSettingsFieldData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    CheckSettingsFieldResponse2,
    CheckSettingsFieldError,
    ThrowOnError
  >({
    ...options,
    url: '/user/checkSettingsField',
  });
};

/**
 * Get subscription plans
 * Get subscription plans
 */
export const getSubscriptionPlans = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetSubscriptionPlansResponse2,
    GetSubscriptionPlansError,
    ThrowOnError
  >({
    ...options,
    url: '/subscription/plans',
  });
};

/**
 * Get subscription usage
 * Get subscription usage
 */
export const getSubscriptionUsage = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    GetSubscriptionUsageResponse2,
    GetSubscriptionUsageError,
    ThrowOnError
  >({
    ...options,
    url: '/subscription/usage',
  });
};

/**
 * List models
 * List all available models
 */
export const listModels = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<ListModelsResponse2, ListModelsError, ThrowOnError>({
    ...options,
    url: '/subscription/modelList',
  });
};

/**
 * Create checkout session
 * Create a checkout session
 */
export const createCheckoutSession = <ThrowOnError extends boolean = false>(
  options: Options<CreateCheckoutSessionData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreateCheckoutSessionResponse2,
    CreateCheckoutSessionError,
    ThrowOnError
  >({
    ...options,
    url: '/subscription/createCheckoutSession',
  });
};

/**
 * Create portal session
 * Create a portal session
 */
export const createPortalSession = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    CreatePortalSessionResponse2,
    CreatePortalSessionError,
    ThrowOnError
  >({
    ...options,
    url: '/subscription/createPortalSession',
  });
};

/**
 * Search
 * Search for canvases, resources, documents, etc.
 */
export const search = <ThrowOnError extends boolean = false>(
  options: Options<SearchData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<SearchResponse2, SearchError, ThrowOnError>({
    ...options,
    url: '/search',
  });
};

/**
 * Multilingual Web Search
 * Search web content across multiple languages
 */
export const multiLingualWebSearch = <ThrowOnError extends boolean = false>(
  options: Options<MultiLingualWebSearchData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    MultiLingualWebSearchResponse2,
    MultiLingualWebSearchError,
    ThrowOnError
  >({
    ...options,
    url: '/search/multilingualSearch',
  });
};

/**
 * Scrape
 * Scrape a weblink
 */
export const scrape = <ThrowOnError extends boolean = false>(
  options: Options<ScrapeData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<ScrapeResponse, ScrapeError, ThrowOnError>({
    ...options,
    url: '/misc/scrape',
  });
};

/**
 * Upload
 * Upload a file
 */
export const upload = <ThrowOnError extends boolean = false>(
  options: Options<UploadData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<UploadResponse2, UploadError, ThrowOnError>({
    ...options,
    ...formDataBodySerializer,
    headers: {
      'Content-Type': null,
      ...options?.headers,
    },
    url: '/misc/upload',
  });
};

/**
 * Serve static
 * Serve static files (only for local testing)
 */
export const serveStatic = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<ServeStaticResponse, ServeStaticError, ThrowOnError>({
    ...options,
    url: '/misc/static/{fileName}',
  });
};

/**
 * Convert between formats
 * Convert content between different formats (e.g., HTML to Markdown)
 */
export const convert = <ThrowOnError extends boolean = false>(
  options: Options<ConvertData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<ConvertResponse2, ConvertError, ThrowOnError>({
    ...options,
    ...formDataBodySerializer,
    headers: {
      'Content-Type': null,
      ...options?.headers,
    },
    url: '/misc/convert',
  });
};
