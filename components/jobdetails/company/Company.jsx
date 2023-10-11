import React from 'react'
import { View, Text } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'


const Company = ({ companyLogo, jobTitle, companyName, Location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: checkImageURL(companyLogo) ? companyLogo : 'https://via.placeholder.com/150' }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} | </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            style={styles.locationImage}
            resizeMode="contain"
          />
        </View>
      </View>

    </View>
  )
}

export default Company