<?php

namespace Amazon\Pay\Api\Spc;

use Amazon\Pay\Api\Spc\Response\CartDetailsInterface;

interface OrderInterface
{
    /**
     * @param int $cartId
     * @param mixed|null $cartDetails
     * @return CartDetailsInterface
     */
    public function createOrder(int $cartId, $cartDetails = null);
}
