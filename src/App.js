import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
function App() {
  return (
    <div className="App">
		
      <PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
		id: '23d98b91-4e82-4178-bf9b-f13fcdad1078',
		embedUrl:  "https://app.powerbi.com/reportEmbed?reportId=23d98b91-4e82-4178-bf9b-f13fcdad1078&groupId=e3dd0422-d620-4164-ad25-41a40801e13b&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
		accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSIsImtpZCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMmExNTkzMDUtODAzNi00YjMxLTgwYzYtZDljODA3OGNkMWI0LyIsImlhdCI6MTc0NzMwMzY5NywibmJmIjoxNzQ3MzAzNjk3LCJleHAiOjE3NDczMDgyMTIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWFFBaS84WkFBQUFXSVZubnBWYnZBNDJYYXpQMEJURlJWVDFoYmZaTElVTXVDd0ozckpMNWlvNFVESUhaVkhXSUNyc3E1MDBpVDB4MTJSLzYrcHlQbXpwa0xSemRZaVgzT1VtcWQxeVJQM1NoYm92emJPZlAzYnB4bTFaNDFTdm9rOXBFeVRWYVdjRzF0YXp2TVlaWVZna2VkdFY5K2V4Wmc9PSIsImFtciI6WyJwd2QiLCJyc2EiLCJtZmEiXSwiYXBwaWQiOiIyM2Q4ZjZiZC0xZWIwLTRjYzItYTA4Yy03YmY1MjVjNjdiY2QiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6IjYyOGZlNTgzLWEyNzAtNDdhYy05NTM3LWRjY2I3ZmRkOGY0MCIsImZhbWlseV9uYW1lIjoiSGVnZGUiLCJnaXZlbl9uYW1lIjoiU2Fua2V0IiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjQwMTo0OTAwOjE2ZjA6ZWJmMDpjNWFlOmRhMjA6Yzg4ZjplYmQ5IiwibmFtZSI6IlNhbmtldCBIZWdkZSIsIm9pZCI6Ijc5ZDM3Mjg5LWFmYTQtNGRhOC1hYzAxLWMxYjE0MzhiY2ZmMyIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0zMjU2OTQxNDkwLTIzOTA0MzYxMDktNTMyNTcwMzg5LTIzNjUiLCJwdWlkIjoiMTAwMzIwMDMwMkEyM0I4OSIsInJoIjoiMS5BVlVBQlpNVktqYUFNVXVBeHRuSUI0elJ0QWtBQUFBQUFBQUF3QUFBQUFBQUFBQ0lBSmxWQUEuIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUGlwZWxpbmUuRGVwbG95IFBpcGVsaW5lLlJlYWQuQWxsIFBpcGVsaW5lLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInNpZCI6IjAwNDEyZjk5LWQxZTUtMDkwMi03NjU1LTg3NDhmNjA3ZmE3YyIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImVfbm5XVFFGNmpudXdMeTJqamV2U3JxT2Q0Y29aS0dqM0dTMGQtRTBWTVEiLCJ0aWQiOiIyYTE1OTMwNS04MDM2LTRiMzEtODBjNi1kOWM4MDc4Y2QxYjQiLCJ1bmlxdWVfbmFtZSI6InNhbmtldC5oZWdkZUBhZ3BwcmF0aGFtLmNvbSIsInVwbiI6InNhbmtldC5oZWdkZUBhZ3BwcmF0aGFtLmNvbSIsInV0aSI6ImUzSHJqZ0ZFV2stMmhjU2cxQkVHQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDI2In0.Sf0gGWH91K7xOgujQ5cON-NhojyzoPeHS4WhwhI8ZwRFVGYbJtiCW4ILoEo28sRb7M_uOSi18ajqrdR0_1pkL8ohbp-Old5YCW_jbKIfXmj0zuNiNa45ZJvCqbzAq9jn9Y4-xY1cbbBorpcmZPFiimjXV6pQjL6Uyn90RJ2nqW-X4qbPEPs2gMxSNyfkzeinIOLxb8qBoi7qaZE2tXQ8ZsCr3wULDeGs94ZJBLiEveCWhuSmUbwmd72w_zGHgYyApUxGMHbWAyoQFVUqgp43hR_0TaQWba5t6nP25GhRohsavaxRIcfJ3S5rU7pKyvRh751P5djJEMQ9rL6zc2I99w',
		tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: false
				}
			},
			background: models.BackgroundType.Transparent,
		}
	}}

	eventHandlers = {
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event.detail);}],
			['visualClicked', () => console.log('visual clicked')],
			['pageChanged', (event) => console.log(event)],
		])
	}

	cssClassName = { "Embed-container" }

	getEmbeddedComponent={(embeddedReport) => {
		window.report = embeddedReport;
	}}
	
/>

    </div>
  );
}

export default App;
