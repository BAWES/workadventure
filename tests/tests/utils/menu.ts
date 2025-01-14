import {expect, Page} from "@playwright/test";

class Menu {

    async openChat(page: Page) {
        await page.click('button.chat-btn');
        await expect(page.locator('#chat.chatWindow')).toBeVisible();
    }

    async openMapEditor(page: Page) {
        await page.getByTestId('map-menu').click({timeout: 30_000});
        await page.getByRole('button', { name: 'Map editor' }).click();
        await expect(page.getByRole('button', { name: 'Map editor' })).toBeHidden();
        // await expect(await page.getByRole('button', {name: 'toggle-map-editor'}).first()).toHaveClass(/bor²der-top-light/);
    }

    async openBurgerMenu(page: Page) {
        await page.getByTestId('burger-menu').click();
        await expect(page.getByText('Change your status')).toBeVisible();
    }

    async openMenu(page: Page) {
        // 'button#burgerIcon' do not exist in the new graphic version !!
        await expect(page.locator('button#burgerIcon')).toBeVisible();
        const mobileMenuVisible = await page.locator('button#burgerIcon img.tw-rotate-0').isVisible();
        if(mobileMenuVisible){
            await page.click('button#burgerIcon');
        }
        await page.getByTestId('action-user').click({timeout: 30_000});
        await expect(await page.getByTestId('profile-menu')).toHaveClass(/backdrop-blur/);
    }

    async openMapMenu(page: Page) {
        // await page.pause();
        await page.getByTestId('map-menu').click();
        await expect(page.getByTestId('map-sub-menu')).toHaveClass(/backdrop-blur/);
    }

    async closeMenu(page: Page) {
        await page.getByTestId('action-user').click({timeout: 30_000});
        await expect(page.getByTestId('profile-menu')).toBeHidden();
    }

    async closeBurgerMenu(page: Page) {
        await page.getByTestId('burger-menu').click();
        await expect(page.getByText('Change your status')).toBeHidden();
    }

    async closeMapMenu(page: Page) {
        await page.getByTestId('map-menu').click({timeout: 30_000});
        await expect(page.getByTestId('map-sub-menu')).toBeHidden();
    }

    async waitForMapMenu(page: Page, timeout = 30_000) {
        await expect(page.getByTestId('map-menu')).toBeVisible({
            timeout
        });
    }

    async closeMapEditor(page: Page) {
        //await page.locator('.map-editor .configure-my-room .close-window').click();
        await page.locator('.map-editor .sidebar .close-window').click();
        await expect(page.locator('.map-editor .configure-my-room .close-window')).toBeHidden();
    }

    async toggleMegaphoneButton(page: Page) {
        await this.openMapMenu(page);
        await page.getByRole('button', { name: 'Send global message' }).click();
        //await page.getByTestId('global-message').click({timeout: 30_000});
    }

    async isThereMegaphoneButton(page: Page) {
        await this.openMapMenu(page);
        await page.getByRole('button', { name: 'Send global message' }).click();
        await expect(page.getByRole('button', { name: 'Start live message' })).toBeEnabled();
        await page.getByRole('button', { name: '×' }).first().click();
        //await this.closeMapMenu(page);
    }

    async isNotThereMegaphoneButton(page: Page) {
        await this.openMapMenu(page);
        await page.getByRole('button', { name: 'Send global message' }).click();
        await expect(page.getByRole('button', { name: 'Start live message' })).toBeDisabled();
        await page.getByRole('button', { name: '×' }).first().click();
        //await this.closeMapMenu(page);
    }

    async openStatusList(page : Page, isMobile = false){
        if(isMobile){
            await page.getByTestId('burger-menu').click();
            /*await expect(await page.locator('button#burgerIcon')).toBeVisible();
            const mobileMenuVisible = await page.locator('button#burgerIcon img.tw-rotate-0').isVisible();
            if(mobileMenuVisible){
                await page.click('button#burgerIcon');
            }*/
        }
        await page.getByTestId('action-user').click();
    }

    async clickOnStatus(page:Page,status: string){
        await expect(page.getByText(status)).toBeVisible();
        await page.getByText(status).click();
        //eslint-disable-next-line playwright/no-wait-for-timeout
        await page.waitForTimeout(500);
    }

    async turnOnCamera(page:Page){
        if(page.getByTestId('camera-button').locator('.bg-danger')) return;
        await page.getByTestId('camera-button').click();
        await expect(page.getByTestId('camera-button').locator('.bg-danger')).toBeVisible();
    }
    async turnOffCamera(page:Page){
        if(await page.getByAltText('Turn on webcam').isVisible()) return;
        await page.getByAltText('Turn off webcam').click();
        await expect(page.getByAltText('Turn on webcam')).toBeVisible();
    }
    async turnOnMicrophone(page:Page){
        if(page.getByTestId('microphone-button').locator('.bg-danger')) return;
        await page.getByTestId('microphone-button').click();
        await expect(page.getByTestId('microphone-button').locator('.bg-danger')).toBeVisible();
    }
    async turnOffMicrophone(page:Page){
        //if(page.getByTestId('microphone-button').locator('.bg-danger')) return;
        await page.getByTestId('microphone-button').click();
        await expect(page.getByTestId('microphone-button').locator('.bg-danger')).toBeHidden();
    }

    async expectCameraOn(page: Page) {
        await this.expectButtonState(page, 'camera-button', 'normal');
    }

    async expectCameraOff(page: Page) {
        await this.expectButtonState(page, 'camera-button', 'forbidden');
    }

    async expectCameraDisabled(page: Page) {
        await this.expectButtonState(page, 'camera-button', 'disabled');
    }

    async expectMicrophoneOn(page: Page) {
        await this.expectButtonState(page, 'microphone-button', 'normal');
    }

    async expectMicrophoneOff(page: Page) {
        await this.expectButtonState(page, 'microphone-button', 'forbidden');
    }

    async expectMicrophoneDisabled(page: Page) {
        await this.expectButtonState(page, 'microphone-button', 'disabled');
    }

    async expectButtonState(page: Page, buttonTestId: string, state: "normal" | "active" | "forbidden" | "disabled") {
        const button = page.getByTestId(buttonTestId);
        switch (state) {
            case "normal":
                await expect(button).not.toHaveClass(/bg-danger/);
                await expect(button).not.toHaveClass(/opacity-50/);
                await expect(button).not.toHaveClass(/bg-secondary/);
                break;
            case "active":
                await expect(button).toHaveClass(/bg-secondary/);
                break;
            case "forbidden":
                await expect(button).toHaveClass(/bg-danger/);
                break;
            case "disabled":
                await expect(button).toHaveClass(/opacity-50/);
                break;
            default: {
                const _exhaustiveCheck: never = state;
            }
        }
    }

    async expectStatus(page: Page, status: string) {
        await expect(page.getByTestId('action-user').getByText(status).locator('visible=true')).toBeVisible();
    }

    async closeNotificationPopUp(page:Page){
        if(await page.getByRole('button',{name:'Continue without notification'}).isHidden())return;
        await page.getByRole('button',{name:'Continue without notification'}).click();
        await expect(page.getByRole('button',{name:'Continue without notification'})).toBeVisible();

    }
    async closeCameraPopUp(page:Page){
        if(await page.getByRole('button',{name:'Continue without webcam'}).isHidden())return;
        await page.getByRole('button',{name:'Continue without webcam'}).click();
        await expect(page.getByRole('button',{name:'Continue without webcam'})).toBeVisible();

    }

    async closeMapEditorConfigureMyRoomPopUp(page:Page){
        await page.locator('.configure-my-room button.close-window').click();
    }
}

export default new Menu();
