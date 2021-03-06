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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1Preconditions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Preconditions'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1DeleteOptions = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1Preconditions);
  }
}(this, function(ApiClient, V1Preconditions) {
  'use strict';




  /**
   * The V1DeleteOptions model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1DeleteOptions
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1DeleteOptions</code>.
   * DeleteOptions may be provided when deleting an API object.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1DeleteOptions
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>V1DeleteOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1DeleteOptions} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1DeleteOptions} The populated <code>V1DeleteOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiVersion')) {
        obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
      }
      if (data.hasOwnProperty('gracePeriodSeconds')) {
        obj['gracePeriodSeconds'] = ApiClient.convertToType(data['gracePeriodSeconds'], 'Number');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('orphanDependents')) {
        obj['orphanDependents'] = ApiClient.convertToType(data['orphanDependents'], 'Boolean');
      }
      if (data.hasOwnProperty('preconditions')) {
        obj['preconditions'] = V1Preconditions.constructFromObject(data['preconditions']);
      }
      if (data.hasOwnProperty('propagationPolicy')) {
        obj['propagationPolicy'] = ApiClient.convertToType(data['propagationPolicy'], 'String');
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
   * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
   * @member {Number} gracePeriodSeconds
   */
  exports.prototype['gracePeriodSeconds'] = undefined;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
   * @member {Boolean} orphanDependents
   */
  exports.prototype['orphanDependents'] = undefined;
  /**
   * Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1Preconditions} preconditions
   */
  exports.prototype['preconditions'] = undefined;
  /**
   * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy.
   * @member {String} propagationPolicy
   */
  exports.prototype['propagationPolicy'] = undefined;



  return exports;
}));


