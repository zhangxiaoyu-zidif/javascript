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
    define(['io.kubernetes.js/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1PhotonPersistentDiskVolumeSource = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1PhotonPersistentDiskVolumeSource model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1PhotonPersistentDiskVolumeSource
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1PhotonPersistentDiskVolumeSource</code>.
   * Represents a Photon Controller persistent disk resource.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1PhotonPersistentDiskVolumeSource
   * @class
   * @param pdID {String} ID that identifies Photon Controller persistent disk
   */
  var exports = function(pdID) {
    var _this = this;


    _this['pdID'] = pdID;
  };

  /**
   * Constructs a <code>V1PhotonPersistentDiskVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1PhotonPersistentDiskVolumeSource} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1PhotonPersistentDiskVolumeSource} The populated <code>V1PhotonPersistentDiskVolumeSource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fsType')) {
        obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
      }
      if (data.hasOwnProperty('pdID')) {
        obj['pdID'] = ApiClient.convertToType(data['pdID'], 'String');
      }
    }
    return obj;
  }

  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
   * @member {String} fsType
   */
  exports.prototype['fsType'] = undefined;
  /**
   * ID that identifies Photon Controller persistent disk
   * @member {String} pdID
   */
  exports.prototype['pdID'] = undefined;



  return exports;
}));


