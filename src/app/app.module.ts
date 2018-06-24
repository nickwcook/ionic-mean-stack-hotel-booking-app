// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// IONIC
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// COMPONENTS
import { App } from './app.component';
import { HomePage } from '../pages/home/home';
import { AvailableRoomsPage } from '../pages/available-rooms/available-rooms';
import { BookingPage } from '../pages/booking/booking';
import { SearchPage } from '../pages/search/search';

// PROVIDERS
import { RoomsProvider } from '../providers/rooms/rooms';

@NgModule({

	declarations: [
		App,
		HomePage,
		AvailableRoomsPage,
		BookingPage,
		SearchPage
	],
	
	imports: [
            BrowserModule,
            HttpModule,
		IonicModule.forRoot(App)
	],
	
	bootstrap: [IonicApp],
	
	entryComponents: [
		App,
		HomePage,
		AvailableRoomsPage,
		BookingPage,
		SearchPage
	],
	
	providers: [
		StatusBar,
		SplashScreen,
		{
			provide: ErrorHandler, 
			useClass: IonicErrorHandler
		},
		RoomsProvider
	]

})

export class AppModule {}