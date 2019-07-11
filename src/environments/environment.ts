// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  amplify: {
	Auth:{
		identifyPoolId: 'ap-northeast-1:4811f9d6-f3b5-42a5-b44e-654fca2a186c',
		region: 'ap-northeast-1',
		userPoolId: 'ap-northeast-1_dZicTbBUW',
		userPoolWebClientId:'39h3stmdpvlg9vv4u6guf0lsfm'
	}
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
