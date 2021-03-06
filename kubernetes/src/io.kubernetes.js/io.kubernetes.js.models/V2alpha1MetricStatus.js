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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V2alpha1ObjectMetricStatus', 'io.kubernetes.js/io.kubernetes.js.models/V2alpha1PodsMetricStatus', 'io.kubernetes.js/io.kubernetes.js.models/V2alpha1ResourceMetricStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V2alpha1ObjectMetricStatus'), require('./V2alpha1PodsMetricStatus'), require('./V2alpha1ResourceMetricStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V2alpha1MetricStatus = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V2alpha1ObjectMetricStatus, root.KubernetesJsClient.V2alpha1PodsMetricStatus, root.KubernetesJsClient.V2alpha1ResourceMetricStatus);
  }
}(this, function(ApiClient, V2alpha1ObjectMetricStatus, V2alpha1PodsMetricStatus, V2alpha1ResourceMetricStatus) {
  'use strict';




  /**
   * The V2alpha1MetricStatus model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V2alpha1MetricStatus
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V2alpha1MetricStatus</code>.
   * MetricStatus describes the last-read state of a single metric.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1MetricStatus
   * @class
   * @param type {String} type is the type of metric source.  It will match one of the fields below.
   */
  var exports = function(type) {
    var _this = this;




    _this['type'] = type;
  };

  /**
   * Constructs a <code>V2alpha1MetricStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1MetricStatus} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1MetricStatus} The populated <code>V2alpha1MetricStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('object')) {
        obj['object'] = V2alpha1ObjectMetricStatus.constructFromObject(data['object']);
      }
      if (data.hasOwnProperty('pods')) {
        obj['pods'] = V2alpha1PodsMetricStatus.constructFromObject(data['pods']);
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = V2alpha1ResourceMetricStatus.constructFromObject(data['resource']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1ObjectMetricStatus} object
   */
  exports.prototype['object'] = undefined;
  /**
   * pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1PodsMetricStatus} pods
   */
  exports.prototype['pods'] = undefined;
  /**
   * resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1ResourceMetricStatus} resource
   */
  exports.prototype['resource'] = undefined;
  /**
   * type is the type of metric source.  It will match one of the fields below.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


