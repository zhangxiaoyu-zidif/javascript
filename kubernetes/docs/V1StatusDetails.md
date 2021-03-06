# KubernetesJsClient.V1StatusDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**causes** | [**[V1StatusCause]**](V1StatusCause.md) | The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes. | [optional] 
**group** | **String** | The group attribute of the resource associated with the status StatusReason. | [optional] 
**kind** | **String** | The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**name** | **String** | The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). | [optional] 
**retryAfterSeconds** | **Number** | If specified, the time in seconds before the operation should be retried. | [optional] 


