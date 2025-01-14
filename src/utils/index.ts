import { i18n } from '@/i18n';

export function setAssetsBaseUrl() {
	const cesiumAssetsPath = '/cesium';

	if (import.meta.env.MODE == 'development') {
		// Cesium 静态资源路径
		(window as Window & any).CESIUM_BASE_URL = cesiumAssetsPath;
		// three 静态资源路径
		(window as Window & any).threeAssetsPath = '/src/components/Three/';
	} else {
		(window as Window & any).CESIUM_BASE_URL = import.meta.env.VITE_PUBLIC_PATH + cesiumAssetsPath;

		(window as Window & any).threeAssetsPath = import.meta.env.VITE_PUBLIC_PATH + '/three/';
	}
}

export function getStorage(key: string): string | Array<any> | object | any {
	const str: string = window.localStorage[key] ?? undefined;
	try {
		if (str) {
			const storageString = window.localStorage.getItem(key) as string;
			return JSON.parse(storageString)[key];
		} else {
			return '';
		}
	} catch (error: any) {
		return '';
	}
}

export function setStorage(key: string, value: any): void {
	const str = JSON.stringify({
		[key]: value,
	});
	window.localStorage.setItem(key, str);
}

export function clearStorage(): void {
	window.localStorage.clear();
}

export function i18nTm(mst: string): string {
	const { te, tm } = i18n.global;
	let msg = te(mst) ? tm(mst) : '';
	return msg;
}

export function envMode(): { mode: string; isDev: boolean; isProd: boolean } {
	const result = {
		mode: import.meta.env.MODE,
		isDev: import.meta.env.MODE == 'development',
		isProd: import.meta.env.MODE == 'production',
	};
	return result;
}
