import {StyleProp, StyleSheet, TextStyle} from "react-native";
import {IconSymbol} from "@/components/ui/IconSymbol";
import {Link} from "expo-router";
import type {LinkProps} from "expo-router";

export function AddButton(
    {
        href,
        style
    } : {
        href: LinkProps['href'],
        style?: StyleProp<TextStyle>
    }) {
    return (
        <Link
            href={href}
            style={[styles.button, style]}
        >
            <IconSymbol name="plus" size={28} color="#ffffff"/>
        </Link>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#507bb2",
        borderRadius: 60,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        elevation: 6,
    },
});