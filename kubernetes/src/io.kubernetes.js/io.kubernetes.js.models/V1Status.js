/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1ListMeta', 'io.kubernetes.js/io.kubernetes.js.models/V1StatusDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ListMeta'), require('./V1StatusDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1Status = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1ListMeta, root.KubernetesJsClient.V1StatusDetails);
  }
}(this, function(ApiClient, V1ListMeta, V1StatusDetails) {
  'use strict';




  /**
   * The V1Status model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1Status
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1Status</code>.
   * Status is a return value for calls that don&#39;t return other objects.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1Status
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>V1Status</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1Status} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1Status} The populated <code>V1Status</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiVersion')) {
        obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = V1StatusDetails.constructFromObject(data['details']);
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = V1ListMeta.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources
   * @member {String} apiVersion
   */
  exports.prototype['apiVersion'] = undefined;
  /**
   * Suggested HTTP return code for this status, 0 if not set.
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1StatusDetails} details
   */
  exports.prototype['details'] = undefined;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * A human-readable description of the status of this operation.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Standard list metadata. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ListMeta} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * A machine-readable description of why this operation is in the \"Failure\" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Status of the operation. One of: \"Success\" or \"Failure\". More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#spec-and-status
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


