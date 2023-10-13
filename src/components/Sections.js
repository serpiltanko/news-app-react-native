import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Section from './Section';


const Sections = () => {
    return (
        <ScrollView style={styles.container}>
            <Section
                image={require('../assets/Direksiyonlar.png')}
                text="Direksiyonlar değişiyor! İşte otomobillerin yeni yüzü"
                footerLeft="newspaper-o"
                footerLeftText="Hurriyet.com.tr"
                footerRight="clock-o"
                footerRightText="6 gün önce"
            />
            <Section
                image={require('../assets/Trump.png')}
                text="Trump açıkladı: Huawei telefon sahiplerine önemli uyarı"
                footerLeft="newspaper-o"
                footerLeftText="Hurriyet.com.tr"
                footerRight="clock-o"
                footerRightText="1 ay önce"
            />
            <Section
                image={require('../assets/EkremImamoglu.png')}
                text="Otogarı teknoloji merkezine dönüştüreceğiz"
                footerLeft="newspaper-o"
                footerLeftText="Hurriyet.com.tr"
                footerRight="clock-o"
                footerRightText="30 gün önce"
            />
            <Section
                image={require('../assets/Xiaomi.png')}
                text="Xiaomi'den ön kamerası kaybolan telefon!"
                footerLeft="newspaper-o"
                footerLeftText="Hurriyet.com.tr"
                footerRight="clock-o"
                footerRightText="12 gün önce"
            />
            <Section
                image={require('../assets/VergiDarbesi.png')}
                text="Teknoloji devlerine vergi darbesi!"
                footerLeft="newspaper-o"
                footerLeftText="Haberturk.com.tr"
                footerRight="clock-o"
                footerRightText="18 gün önce"
            />
            <Section
                image={require('../assets/GoogleOrtak.png')}
                text="Google'ın yeni teknoloji ortağı oldu"
                footerLeft="newspaper-o"
                footerLeftText="Hurriyet.com.tr"
                footerRight="clock-o"
                footerRightText="6 gün önce"
            />

        </ScrollView>
    )
}

export default Sections

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
})