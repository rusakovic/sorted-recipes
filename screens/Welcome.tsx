import * as React from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  FlatList,
  View,
  ListRenderItemInfo,
} from "react-native";
import * as AuthSession from "expo-auth-session";
import { JwtPayload } from "jwt-decode";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import useOrientation from "../hooks/useOrientation";

import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import TextLink from "../components/TextLink";
import WelcomeSlide from "../components/WelcomeSlide";

import { spacing } from '../styles';

import { RootStackParamList } from "../types";

interface JWT extends JwtPayload {
  name: string;
  nickname: string;
  nonce: string;
  picture: string;
  updated_at: string;
}

// Setup routing props for the screen
type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

// Setup welcome slide images
type ItemSlide = {
  key: string;
  title: string;
  text: string;
  image: number | { uri: string };
};

const welcomeImage0 = require("../assets/images/welcome/0.jpg");
const welcomeImage1 = require("../assets/images/welcome/1.jpg");
const welcomeImage2 = require("../assets/images/welcome/2.jpg");
const welcomeImage3 = require("../assets/images/welcome/3.jpg");

const slides: Readonly<ItemSlide[]> = [
  {
    key: "welcome_carousel_0",
    title: "Open Smart Weekly Meal Packs",
    text: "Explore midweek menus and share\ndeliciously fresh recipes for 1, 2, or 4 people in no time.\n\nAll diets welcome! Each menu offers\na diverse selection of meat, fish and\nvegetarian meals.",
    image: welcomeImage0,
  },
  {
    key: "welcome_carousel_1",
    title: "More Taste, Less Waste",
    text: "Every Pack has been developed to utilise all of your fresh groceries each week.\n\nWith clever ingredient crossovers between the Pack's meals you'll use everything you buy!",
    image: welcomeImage1,
  },
  {
    title: "Simplify\nYour Shop,\nSave Money",
    key: "welcome_carousel_2",
    text: "All the packs work off fresh groceries and a selection of store cupboard essentials to minimise your shopping basket. You'll buy only what you need, saving you more money week on week.",
    image: welcomeImage2,
  },
  {
    key: "welcome_carousel_3",
    title: "Cooking Made Simple With Audio Guides and Timers",
    text: "Use friendly audio prompts to learn, create effortless meals and have fun in the kitchen. Tackle the cooking and cleaning in one to get your meals on the table in record time.",
    image: welcomeImage3,
  },
];

// Configure auth0 constants
const auth0ClientId = "dRp7w1EHZ9KX2AJ3qhDzCCpP6W9iov7w";
const authorizationEndpoint = "https://sortedfood.eu.auth0.com/authorize";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

const WelcomeScreen = ({ navigation }: Props) => {
  const orientation = useOrientation();

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      // id_token will return a JWT token
      responseType: "id_token",
      // retrieve the user's profile
      scopes: ["openid", "profile"],
      extraParams: {
        // ideally, this will be a random value
        nonce: "nonce",
      },
    },
    { authorizationEndpoint }
  );

  React.useEffect(() => {
    if (result) {
      if (result.type === "error") {
        Alert.alert(
          "Authentication error",
          result.params.error_description || "something went wrong"
        );
        return;
      }
      if (result.type === "success") {
        // Retrieve the JWT token
        const jwtToken = result.params.id_token;
        // Decode it
        // .........

        navigation.navigate("Home");
      }
    }
  }, [result]);

  const renderSlide = (item: ListRenderItemInfo<ItemSlide>) => {
    return (
      <WelcomeSlide
        {...item.item}
        titleStyle={styles.title}
        imageStyle={styles.image}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={renderSlide}
        extraData={orientation}
      />
      <SafeAreaView style={styles.absolute}>
        <Button disabled={!request} onPress={() => promptAsync({ useProxy })}>
          Sign Up
        </Button>
        <View style={styles.footerTextWrapper}>
          <Paragraph style={styles.footerText}>
            Already have an account?
          </Paragraph>
          <TextLink disabled={!request} bold onPress={() => promptAsync({ useProxy })}>{" Log in"}</TextLink>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    marginTop: 40,
  },
  image: {
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  absolute: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: spacing.sd,
    marginBottom: spacing.lg,
  },
  footerText: { color: "#fff" },
});

export default WelcomeScreen;
