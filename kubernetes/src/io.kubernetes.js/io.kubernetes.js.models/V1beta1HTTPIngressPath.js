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
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1beta1IngressBackend'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1beta1IngressBackend'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1beta1HTTPIngressPath = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1beta1IngressBackend);
  }
}(this, function(ApiClient, V1beta1IngressBackend) {
  'use strict';




  /**
   * The V1beta1HTTPIngressPath model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1HTTPIngressPath
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1HTTPIngressPath</code>.
   * HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1HTTPIngressPath
   * @class
   * @param backend {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1IngressBackend} Backend defines the referenced service endpoint to which the traffic will be forwarded to.
   */
  var exports = function(backend) {
    var _this = this;

    _this['backend'] = backend;

  };

  /**
   * Constructs a <code>V1beta1HTTPIngressPath</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1HTTPIngressPath} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1HTTPIngressPath} The populated <code>V1beta1HTTPIngressPath</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('backend')) {
        obj['backend'] = V1beta1IngressBackend.constructFromObject(data['backend']);
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
    }
    return obj;
  }

  /**
   * Backend defines the referenced service endpoint to which the traffic will be forwarded to.
   * @member {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1IngressBackend} backend
   */
  exports.prototype['backend'] = undefined;
  /**
   * Path is an extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional \"path\" part of a URL as defined by RFC 3986. Paths must begin with a '/'. If unspecified, the path defaults to a catch all sending traffic to the backend.
   * @member {String} path
   */
  exports.prototype['path'] = undefined;



  return exports;
}));


