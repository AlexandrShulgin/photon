import React, { useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from './messagesListItem.style';
import { Icons } from "../../../../assets/icons";
import { useTranslation } from "react-i18next";

interface IProps {
    item: any,
    copyToClipboard: (text: string) => void
}

const MessagesListItem: React.FC<IProps> = ({ item, copyToClipboard }) => {
    const { t } = useTranslation();

    return (
        <View
            style={[styles.container,
            { justifyContent: item?.question ? "flex-end" : "flex-start" }]}>
            <View>
                <View style={[styles.cloud, item?.answer && styles.cloudFromMe]}>
                    <Text style={[styles.cloudText]}>
                        {item?.question ?? item?.answer}
                    </Text>
                </View>
                {
                    item?.answer &&
                    <View
                        style={[styles.bottomContainer,
                        { justifyContent: item?.question ? "flex-end" : "flex-start" }]}>
                        <View style={styles.rowContainer}>
                            <Icons.Like />
                            <Icons.DisLike />
                        </View>
                        <TouchableOpacity onPress={() =>copyToClipboard(item?.answer)} style={styles.rowContainer}>
                            <Icons.Copy />
                            <Text style={[styles.cloudText]}>{t('copy')}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )
};

export default MessagesListItem;