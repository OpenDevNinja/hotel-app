import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StatusBarSeparator from '../components/StatusBarSeparator';
import Colors from '../constants/colors';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const DatePicker = () => {
    const navigation = useNavigation();
    const [selectedMonth, setSelectedMonth] = useState(new Date());
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [months, setMonths] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        generateMonths();
    }, []);

    const generateMonths = () => {
        const currentDate = new Date();
        const generatedMonths = [];
        for (let i = 0; i < 15; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
            generatedMonths.push(date);
        }
        setMonths(generatedMonths);
    };

    const renderMonthSelector = () => {
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.monthSelector}>
                {months.map((month, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.monthButton,
                            month.getMonth() === selectedMonth.getMonth() && styles.selectedMonth
                        ]}
                        onPress={() => setSelectedMonth(month)}
                    >
                        <Text style={[
                            styles.monthText,
                            month.getMonth() === selectedMonth.getMonth() && styles.selectedMonthText
                        ]}>
                            {month.toLocaleString('default', { month: 'short', year: 'numeric' })}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    };

    const renderCalendar = () => {
        const daysInMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), 1).getDay();
        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
        const paddingDays = Array.from({ length: firstDayOfMonth }, (_, i) => null);

        return (
            <View style={styles.calendar}>
                <View style={styles.weekDays}>
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                        <Text key={day} style={styles.weekDay}>{day}</Text>
                    ))}
                </View>
                <View style={styles.days}>
                    {[...paddingDays, ...days].map((day, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.day,
                                isSelectedDate(day) && styles.selectedDay,
                                isInRange(day) && styles.rangeDay,
                                !day && styles.emptyDay
                            ]}
                            onPressIn={() => handleDateSelection(day)}
                            onPressOut={() => setIsDragging(false)}
                            onTouchMove={() => isDragging && handleDateSelection(day)}
                            disabled={!day}
                        >
                            {day && <Text style={[
                                styles.dayText,
                                isSelectedDate(day) && styles.selectedDayText,
                                isInRange(day) && styles.rangeDayText
                            ]}>{day}</Text>}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    };

    const isSelectedDate = (day) => {
        if (!day) return false;
        const currentDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), day);
        return (checkInDate && currentDate.getTime() === checkInDate.getTime()) ||
            (checkOutDate && currentDate.getTime() === checkOutDate.getTime());
    };

    const isInRange = (day) => {
        if (!day || !checkInDate || !checkOutDate) return false;
        const currentDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), day);
        return currentDate > checkInDate && currentDate < checkOutDate;
    };

    const handleDateSelection = (day) => {
        if (!day) return;
        const selectedDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), day);

        if (!checkInDate || (checkInDate && checkOutDate) || selectedDate < checkInDate) {
            setCheckInDate(selectedDate);
            setCheckOutDate(null);
            setIsDragging(true);
        } else if (selectedDate > checkInDate) {
            setCheckOutDate(selectedDate);
            setIsDragging(false);
        }
    };

    const formatDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
    };

    return (
        <>
            <StatusBarSeparator />
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Sélectionner la période</Text>
                    <TouchableOpacity>
                        <Text style={styles.cancelButton}>Annuler</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.locationBar}>
                    <Ionicons name="location-outline" size={20} color={Colors.color_blue} />
                    <Text style={styles.locationText}>Cotonou, Bénin</Text>
                </View>

                {renderMonthSelector()}
                <View style={styles.calendarWrapper}>
                    {renderCalendar()}
                </View>

                <View style={styles.dateInfo}>
                    <View>
                        <Text style={styles.dateLabel}>Arrivée </Text>
                        <Text style={styles.dateValue}>{formatDate(checkInDate)}</Text>
                    </View>
                    <View>
                        <Text style={styles.dateLabel}>Départ</Text>
                        <Text style={styles.dateValue}>{formatDate(checkOutDate)}</Text>
                    </View>
                </View>

                <Button
                    title="Valider"
                    onPress={() => navigation.navigate('ReserverNow')}
                    style={styles.signInButton}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    contentContainer: {
        padding: 8,
        paddingTop: 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cancelButton: {
        color: Colors.color_blue,
        fontSize: 16,
        fontWeight: "700"
    },
    locationBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    locationText: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
    monthSelector: {
        flexDirection: 'row',
        marginBottom: 8,
        paddingHorizontal: 8,
    },
    monthButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginHorizontal: 4,
        backgroundColor: Colors.color_bclair,
        height: 40,
    },
    selectedMonth: {
        backgroundColor: Colors.color_blue,
    },
    monthText: {
        color: '#333',
        fontWeight: '600',
    },
    selectedMonthText: {
        color: 'white',
    },
    calendarWrapper: {
        marginTop: 20,
    },
    calendar: {
        backgroundColor: Colors.color_white,
        margin: 5,
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    weekDays: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        backgroundColor: '#F8F8F8',
    },
    weekDay: {
        color: '#999',
        fontWeight: '600',
    },
    days: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 8,
    },
    day: {
        width: '14.28%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4,
    },
    emptyDay: {
        backgroundColor: 'transparent',
    },
    selectedDay: {
        backgroundColor: '#007AFF',
        borderRadius: 20,
    },
    rangeDay: {
        backgroundColor: 'rgba(0, 122, 255, 0.2)',
    },
    dayText: {
        color: '#333',
        fontWeight: '600',
    },
    selectedDayText: {
        color: 'white',
    },
    rangeDayText: {
        color: '#007AFF',
    },
    dateInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 16,
    },
    dateLabel: {
        color: '#999',
        fontSize: 14,
        marginBottom: 4,
    },
    dateValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    signInButton: {
        marginTop: 55,
        marginHorizontal: 6,
       
    },
});

export default DatePicker;