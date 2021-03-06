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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1ContainerStateRunning', 'io.kubernetes.js/io.kubernetes.js.models/V1ContainerStateTerminated', 'io.kubernetes.js/io.kubernetes.js.models/V1ContainerStateWaiting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ContainerStateRunning'), require('./V1ContainerStateTerminated'), require('./V1ContainerStateWaiting'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1ContainerState = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1ContainerStateRunning, root.KubernetesJsClient.V1ContainerStateTerminated, root.KubernetesJsClient.V1ContainerStateWaiting);
  }
}(this, function(ApiClient, V1ContainerStateRunning, V1ContainerStateTerminated, V1ContainerStateWaiting) {
  'use strict';




  /**
   * The V1ContainerState model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1ContainerState
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1ContainerState</code>.
   * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerState
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>V1ContainerState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerState} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerState} The populated <code>V1ContainerState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('running')) {
        obj['running'] = V1ContainerStateRunning.constructFromObject(data['running']);
      }
      if (data.hasOwnProperty('terminated')) {
        obj['terminated'] = V1ContainerStateTerminated.constructFromObject(data['terminated']);
      }
      if (data.hasOwnProperty('waiting')) {
        obj['waiting'] = V1ContainerStateWaiting.constructFromObject(data['waiting']);
      }
    }
    return obj;
  }

  /**
   * Details about a running container
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerStateRunning} running
   */
  exports.prototype['running'] = undefined;
  /**
   * Details about a terminated container
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerStateTerminated} terminated
   */
  exports.prototype['terminated'] = undefined;
  /**
   * Details about a waiting container
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1ContainerStateWaiting} waiting
   */
  exports.prototype['waiting'] = undefined;



  return exports;
}));


