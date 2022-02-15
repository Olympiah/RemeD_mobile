import { WebView } from "react-native-webview";
import { Platform } from "react-native";


const Chat = () => {
  return (
    <WebView
      //   source={{
      //     uri: url + `/?q=${authQuery}&playsinline=1`,
      //   }}
      source={{
        uri: `<SERVER_URL>/?playsinline=1`,
      }}
      originWhitelist={["*"]}
      mediaPlaybackRequiresUserAction={false}
      allowFileAccess={true}
      allowsInlineMediaPlayback={Platform.OS === "ios"}
    />
  );
};

export default Chat;
