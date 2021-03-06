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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1KeyToPath'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1KeyToPath'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1SecretProjection = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1KeyToPath);
  }
}(this, function(ApiClient, V1KeyToPath) {
  'use strict';




  /**
   * The V1SecretProjection model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1SecretProjection
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1SecretProjection</code>.
   * Adapts a secret into a projected volume.  The contents of the target Secret&#39;s Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1SecretProjection
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>V1SecretProjection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1SecretProjection} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1SecretProjection} The populated <code>V1SecretProjection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [V1KeyToPath]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('optional')) {
        obj['optional'] = ApiClient.convertToType(data['optional'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1KeyToPath>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Specify whether the Secret or its key must be defined
   * @member {Boolean} optional
   */
  exports.prototype['optional'] = undefined;



  return exports;
}));


