import { WebView } from "react-native-webview";
import { Platform } from "react-native";
import { registerGlobals } from "react-native-webrtc";
// import useStaticServer from "../utils/StaticServer";

const bypass = () => {
  registerGlobals();
  window.RTCPeerConnection.prototype.addTrack = () => {};
  window.RTCPeerConnection.prototype.getSenders = () => {};
  window.location = { protocol: "https:" };
};

const Chat = () => {
  bypass();
  //   const [url] = useStaticServer();

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
