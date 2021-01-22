/**
 * Copyright © Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/payment/list': {
                'Amazon_Pay/js/view/payment/list-mixin': true
            },
            'Magento_Tax/js/view/checkout/summary/grand-total': {
                'Amazon_Pay/js/view/checkout/summary/grand-total-mixin': true,
                'Amazon_Payment/js/view/checkout/summary/grand-total-mixin': false
            }
        }
    },
    map: {
        '*': {
            amazonPayV2ProductAdd: 'Amazon_Pay/js/amazon-product-add',
            amazonPayV2Button: 'Amazon_Pay/js/amazon-button',
            amazonPayV2Config: 'Amazon_Pay/js/model/amazonPayV2Config',
            amazonPayV2LoginButton: 'Amazon_Pay/js/amazon-login-button',
            amazonPayV2Logout: 'Amazon_Pay/js/amazon-logout',
            amazonPayV2LogoutButton: 'Amazon_Pay/js/amazon-logout-button'
        }
    },
    paths: {
        amazonPayV2CheckoutDE: 'https://static-eu.payments-amazon.com/checkout',
        amazonPayV2CheckoutUK: 'https://static-eu.payments-amazon.com/checkout',
        amazonPayV2CheckoutJP: 'https://static-fe.payments-amazon.com/checkout',
        amazonPayV2CheckoutUS: 'https://static-na.payments-amazon.com/checkout'
    }
};
