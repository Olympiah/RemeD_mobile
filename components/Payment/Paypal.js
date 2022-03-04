import { View, Platform } from 'react-native';
import { Asset } from 'expo-asset';
import { WebView } from 'react-native-webview'
import { useRoute } from "@react-navigation/native"

const Paypal = () => {

    const route = useRoute();
    const { file } = route.params;
    // const { localUri } = Asset.fromModule(require('../Payment/paypal.html'));
    // console.log(localUri.includes(''))

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

    // }
}
export default Paypal

