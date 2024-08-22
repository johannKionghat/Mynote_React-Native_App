import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../theme';
import RadioButton from './RadioButton';
import Modal from 'react-native-modal';
import Divider from './Divider';
import { getAllNotesFilter } from '../db/crud';
import { globalContext } from '../context/GlobalContext';

export default function FormFilter({ isVisible, onClose }) {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const { setSortBy, sortBy, setRange, range, setNotesArray} = useContext(globalContext)
  const onSubmit = (data) => {
    console.log("sortby: ",data.sortBy,"range:", data.range);
    setRange(data.range);
    setSortBy(data.sortBy);
    onClose();
  };
  useEffect(()=>{
    console.log("sortby: ",sortBy,"range:", range);
    async function fetchData(){
        let AllNotes = await getAllNotesFilter(sortBy, range);
        setNotesArray(AllNotes);
      };
      fetchData();
      
  },[sortBy, range])

  return (
    <Modal 
      isVisible={isVisible} 
      onBackdropPress={onClose} 
      style={styles.modal}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Filter Options</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
        </View>
        <Divider/>
        <Text style={styles.sectionTitle}>Sort by</Text>
        <Controller
          control={control}
          name="sortBy"
          rules={{ required: 'This option is required' }}
          render={({ field: { onChange, value } }) => (
            <>
              <RadioButton
                label="Created date"
                value="createdAT"
                selected={value === 'createdAT'}
                onPress={() => onChange('createdAT')}
              />
              <RadioButton
                label="Category"
                value="category_id"
                selected={value === 'category_id'}
                onPress={() => onChange('category_id')}
              />
              <RadioButton
                label="Modified date"
                value="updatedAt"
                selected={value === 'updatedAt'}
                onPress={() => onChange('updatedAt')}
              />
              <RadioButton
                label="Title"
                value="title"
                selected={value === 'title'}
                onPress={() => onChange('title')}
              />
            </>
          )}
        />
        {errors.sortBy && <Text style={styles.errorText}>{errors.sortBy.message}</Text>}
          <Divider/>
        <Text style={styles.sectionTitle}>Range</Text>
        <Controller
          control={control}
          name="range"
          rules={{ required: 'This option is required' }}
          render={({ field: { onChange, value } }) => (
            <>
              <RadioButton
                label="Ascending"
                value="ASC"
                selected={value === 'ASC'}
                onPress={() => onChange('ASC')}
              />
              <RadioButton
                label="Descending"
                value="DESC"
                selected={value === 'DESC'}
                onPress={() => onChange('DESC')}
              />
            </>
          )}
        />
        {errors.range && <Text style={styles.errorText}>{errors.range.message}</Text>}

        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0, // Remove default margin
  },
  container: {
    width: wp(80), // Set width for the modal
    padding: 20,
    backgroundColor: themeColors.white,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  headerText: {
    fontFamily: "MontserratBold",
    fontSize: hp(2.4),
    color: themeColors.black,
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: hp(2.5),
    color: themeColors.black,
  },
  sectionTitle: {
    fontFamily: "MontserratBold",
    fontSize: hp(2),
    color: themeColors.black,
    marginBottom: hp(1.5),
  },
  errorText: {
    color: 'red',
    marginTop: hp(0.5),
    marginBottom: hp(1.5),
  },
  submitButton: {
    marginTop: hp(2),
    paddingVertical: hp(1.5),
    backgroundColor: themeColors.primary,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: themeColors.white,
    fontSize: hp(2),
    fontFamily: "MontserratBold",
  },
});
