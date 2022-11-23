<?php

namespace Amazon\Pay\Test\Mftf\Helper;

use Facebook\WebDriver\Remote\RemoteWebDriver;
use Facebook\WebDriver\WebDriverExpectedCondition;
use Magento\FunctionalTestingFramework\Helper\Helper;

class WaitForSpcLoad extends Helper
{
    public function waitForSpcLoad($buttonSelector)
    {
        /** @var \Magento\FunctionalTestingFramework\Module\MagentoWebDriver $magentoWebDriver */
        $magentoWebDriver = $this->getModule('\Magento\FunctionalTestingFramework\Module\MagentoWebDriver');

        try {
            $magentoWebDriver->executeInSelenium(function (RemoteWebDriver $webDriver) use ($buttonSelector, $magentoWebDriver) {
                $magentoWebDriver->waitForJS("return $('{$buttonSelector}').is(':empty')", 30);
            });
        } catch (\Exception $e) {
            // Avoid out of memory error sometimes caused by print_r
            // print_r($e);
        } catch (\Error $e) {
            
        }
    }
}
