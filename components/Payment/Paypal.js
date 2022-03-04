import { View, Platform } from 'react-native';
import { WebView } from 'react-native-webview'

const Paypal = () => {

    return (
        <View style={{ flex: 1 }}>
            <WebView
                style={{ overflow: 'scroll' }}
                source={{ uri: "https://distracted-shirley-e9d30f.netlify.app/paypal.html" }}
                originWhitelist={["*"]}
                mixedContentMode={'always'}
                useWebKit={Platform.OS == 'ios'}
                // onLoadEnd={() => this.passValues()}
                useRef='Webview'
                thirdPartyCookiesEnabled={true}
                scrollEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                // injectedJavaScript={this.patchPostMessageJsCode}
                allowUniversalAccessFromFileURLs={true}
                onMessage={(event) => this.handleMessage(event)}
                // onNavigationStateChange={(event) => this.handleNavigation(event)}
                javaScriptEnabled={true} />
        </View>
    );

        return (
            <View style={{ flex: 1 }}>
                <WebView
                    style={{ overflow: 'scroll' }}
                    source={
                        Platform.OS === 'android' ?
                            {
                                uri: localUri.includes('ExponentAsset') ?
                                    localUri :
                                    'file:///android_asset/' + localUri.replace(9),
                            } :
                            require('./paypal.html')
                    }
                    originWhitelist={["*"]}
                    mixedContentMode={'always'}
                    useWebKit={Platform.OS == 'ios'}
                    // onLoadEnd={() => this.passValues()}
                    useRef= 'Webview'
                    thirdPartyCookiesEnabled={true}
                    scrollEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    // injectedJavaScript={this.patchPostMessageJsCode}
                    allowUniversalAccessFromFileURLs={true}
                    onMessage={(event) => this.handleMessage(event)}
                    // onNavigationStateChange={(event) => this.handleNavigation(event)}
                    javaScriptEnabled={true} 
                    allowFileAccess={true}
                    />
            </View>
        );
        
    // }
}
export default Paypal

