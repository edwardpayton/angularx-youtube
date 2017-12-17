# angularx-youtube

A Youtube Api module for Angular 5 and above

Supplied in UMD Bundle format through NPM

https://www.npmjs.com/package/angularx-youtube  
https://github.com/edwardpayton/angularx-youtube

## Installation

To install this library, run:

```bash
$ npm install angularx-youtube --save
```

## Consuming the library

You can import the library in any Angular application by running:

```bash
$ npm install angularx-youtube --save
```

and then from your Angular `AppModule`:

```typescript
// In yout Module

// Import the Youtube Module
import { YoutubeModule } from 'angularx-youtube';

@NgModule({
	...
	imports: [
		// Specify the library as an import
		YoutubeModule
	],
	...
})
```

Once your module is imported, you can use it in your Angular application:

```typescript
import { YoutubeComponent } from 'angularx-youtube';
```

```xml
<!-- You can now use the Youtube component in your app.component.html -->
<youtube-component
	[videoId]="id"
	(ready)="onReady($event)"
	(change)="onChange($event)"
></youtube-component>
```

You will then have full access to the [Youtube iFrame Api](https://developers.google.com/youtube/iframe_api_reference)

For example:

```typescript
	onReady(player): void {
		this.player = player;
	}

	onChange(event): void {
		console.log(event)
	}
```

## License

MIT © [Edward Payton](mailto:edwardjpayton@gmail.com)
