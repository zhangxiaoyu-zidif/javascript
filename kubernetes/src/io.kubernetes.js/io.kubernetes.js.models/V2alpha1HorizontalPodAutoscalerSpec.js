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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V2alpha1CrossVersionObjectReference', 'io.kubernetes.js/io.kubernetes.js.models/V2alpha1MetricSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V2alpha1CrossVersionObjectReference'), require('./V2alpha1MetricSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V2alpha1HorizontalPodAutoscalerSpec = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V2alpha1CrossVersionObjectReference, root.KubernetesJsClient.V2alpha1MetricSpec);
  }
}(this, function(ApiClient, V2alpha1CrossVersionObjectReference, V2alpha1MetricSpec) {
  'use strict';




  /**
   * The V2alpha1HorizontalPodAutoscalerSpec model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V2alpha1HorizontalPodAutoscalerSpec
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V2alpha1HorizontalPodAutoscalerSpec</code>.
   * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1HorizontalPodAutoscalerSpec
   * @class
   * @param maxReplicas {Number} maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
   * @param scaleTargetRef {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1CrossVersionObjectReference} scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count.
   */
  var exports = function(maxReplicas, scaleTargetRef) {
    var _this = this;

    _this['maxReplicas'] = maxReplicas;


    _this['scaleTargetRef'] = scaleTargetRef;
  };

  /**
   * Constructs a <code>V2alpha1HorizontalPodAutoscalerSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1HorizontalPodAutoscalerSpec} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1HorizontalPodAutoscalerSpec} The populated <code>V2alpha1HorizontalPodAutoscalerSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('maxReplicas')) {
        obj['maxReplicas'] = ApiClient.convertToType(data['maxReplicas'], 'Number');
      }
      if (data.hasOwnProperty('metrics')) {
        obj['metrics'] = ApiClient.convertToType(data['metrics'], [V2alpha1MetricSpec]);
      }
      if (data.hasOwnProperty('minReplicas')) {
        obj['minReplicas'] = ApiClient.convertToType(data['minReplicas'], 'Number');
      }
      if (data.hasOwnProperty('scaleTargetRef')) {
        obj['scaleTargetRef'] = V2alpha1CrossVersionObjectReference.constructFromObject(data['scaleTargetRef']);
      }
    }
    return obj;
  }

  /**
   * maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
   * @member {Number} maxReplicas
   */
  exports.prototype['maxReplicas'] = undefined;
  /**
   * metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1MetricSpec>} metrics
   */
  exports.prototype['metrics'] = undefined;
  /**
   * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod.
   * @member {Number} minReplicas
   */
  exports.prototype['minReplicas'] = undefined;
  /**
   * scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V2alpha1CrossVersionObjectReference} scaleTargetRef
   */
  exports.prototype['scaleTargetRef'] = undefined;



  return exports;
}));


