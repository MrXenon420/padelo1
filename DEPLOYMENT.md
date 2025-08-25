# Padelo App - Deployment Guide

## Project Overview

Padelo is a comprehensive padel sports application with both web (React) and mobile (Flutter) implementations. The app includes features for court booking, tournament management, player profiles, marketplace, and comprehensive privacy policy and terms of service acceptance.

## Recent Updates

### Privacy Policy & Terms Integration
- ✅ Created comprehensive Privacy Policy and Terms of Service components
- ✅ Added mandatory policy acceptance during user registration
- ✅ Integrated policy access from user profile settings
- ✅ Updated authentication context to track policy acceptance dates and versions
- ✅ Implemented Flutter versions of all legal documents
- ✅ Added proper routing for legal pages

### Role-Based Authentication
- ✅ All new users default to "Player" role
- ✅ Only platform owners can assign additional roles
- ✅ Removed subscription-based features as requested
- ✅ Simplified registration to 2-step process

## Deployment Prerequisites

### Environment Setup

1. **Node.js & pnpm** (for web app)
   ```bash
   # Install Node.js 18+ and pnpm
   npm install -g pnpm
   ```

2. **Flutter SDK** (for mobile app)
   ```bash
   # Install Flutter SDK 3.2.0+
   # Follow: https://docs.flutter.dev/get-started/install
   ```

3. **Android Studio** (for Android deployment)
   - Install Android Studio with Android SDK
   - Set up signing keys for release builds

4. **Xcode** (for iOS deployment - macOS only)
   - Install Xcode with iOS SDK
   - Set up Apple Developer account and certificates

### Environment Variables

Create `.env` files for different environments:

#### Web App (.env)
```env
VITE_API_BASE_URL=https://api.padelo.app
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=padelo-app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=padelo-app
VITE_MAPS_API_KEY=your_google_maps_api_key
```

#### Flutter App (android/local.properties)
```properties
sdk.dir=/path/to/android/sdk
flutter.sdk=/path/to/flutter/sdk
flutter.versionCode=1
flutter.versionName=1.0.0

# Android signing (for release)
android.storeFile=path/to/keystore.jks
android.storePassword=your_store_password
android.keyAlias=your_key_alias
android.keyPassword=your_key_password

# API Keys
MAPS_API_KEY=your_google_maps_api_key
```

## Web App Deployment

### Development
```bash
cd client
pnpm install
pnpm run dev
```

### Production Build
```bash
cd client
pnpm run build
```

### Deployment Options

#### 1. Netlify (Recommended)
- Connect repository to Netlify
- Build command: `cd client && pnpm run build`
- Publish directory: `client/dist`
- Environment variables: Set in Netlify dashboard

#### 2. Vercel
- Connect repository to Vercel
- Framework preset: Vite
- Root directory: `client`
- Environment variables: Set in Vercel dashboard

#### 3. Traditional Hosting
- Build the project: `cd client && pnpm run build`
- Upload `client/dist` folder to your web server
- Configure server for SPA routing (redirect all routes to index.html)

## Mobile App Deployment

### Flutter Dependencies
```bash
flutter pub get
flutter pub run build_runner build
```

### Android Deployment

#### Debug Build
```bash
flutter build apk --debug
```

#### Release Build
```bash
flutter build apk --release
flutter build appbundle --release  # For Google Play Store
```

#### Google Play Store
1. Create app in Google Play Console
2. Upload the generated AAB file (`build/app/outputs/bundle/release/app-release.aab`)
3. Complete store listing with screenshots and descriptions
4. Submit for review

### iOS Deployment

#### Debug Build
```bash
flutter build ios --debug
```

#### Release Build
```bash
flutter build ios --release
```

#### Apple App Store
1. Open `ios/Runner.xcworkspace` in Xcode
2. Configure signing & capabilities with your Apple Developer account
3. Archive the app (Product → Archive)
4. Upload to App Store Connect
5. Complete app metadata and submit for review

## Firebase Setup

### 1. Create Firebase Project
- Go to [Firebase Console](https://console.firebase.google.com)
- Create new project: "padelo-app"
- Enable Authentication, Firestore, Analytics, and Crashlytics

### 2. Configure Authentication
- Enable Email/Password authentication
- Configure authorized domains for web app

### 3. Add Apps to Firebase
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init

# Add Android app
firebase apps:create android com.padelo.app

# Add iOS app
firebase apps:create ios com.padelo.app

# Add Web app
firebase apps:create web padelo-web
```

### 4. Download Configuration Files
- `google-services.json` → `android/app/`
- `GoogleService-Info.plist` → `ios/Runner/`
- Firebase config object → Web environment variables

## Google Maps Setup

### 1. Enable APIs
- Google Maps SDK for Android
- Google Maps SDK for iOS
- Maps JavaScript API
- Places API
- Geocoding API

### 2. API Key Configuration
- Create restricted API keys for each platform
- Add package name restrictions for mobile
- Add HTTP referrer restrictions for web

## Database Setup

### Option 1: Firebase Firestore (Recommended)
- Configure security rules
- Set up data structure for users, courts, tournaments, etc.
- Enable offline persistence

### Option 2: Custom Backend
- Set up your preferred database (PostgreSQL, MongoDB, etc.)
- Update API endpoints in environment variables
- Implement authentication and authorization

## Content Delivery Network (CDN)

### Static Assets
- Upload images, icons, and other static assets to CDN
- Update asset URLs in the code
- Consider using Firebase Storage or AWS S3

### App Icons and Splash Screens
- Generate appropriate sizes for all platforms
- Update Flutter launcher icons: `flutter packages pub run flutter_launcher_icons:main`
- Update iOS icons in Xcode

## Security Considerations

### API Security
- Implement rate limiting
- Use HTTPS for all communications
- Validate all user inputs
- Implement proper authentication tokens

### Privacy Compliance
- ✅ Privacy Policy implemented and accessible
- ✅ Terms of Service implemented and accessible
- ✅ User consent tracking implemented
- Ensure GDPR/CCPA compliance for your target markets
- Implement data export/deletion features

### Mobile Security
- Enable code obfuscation for production builds
- Use certificate pinning for API calls
- Implement biometric authentication where appropriate

## Performance Optimization

### Web App
- Enable compression (gzip/brotli)
- Implement lazy loading for routes
- Optimize images and assets
- Use service workers for caching

### Mobile App
- Enable R8/ProGuard for Android
- Optimize iOS build settings
- Implement app bundle splitting
- Use efficient image formats

## Monitoring and Analytics

### Crash Reporting
- Firebase Crashlytics configured
- Monitor crash-free users percentage
- Set up alerts for critical issues

### Performance Monitoring
- Firebase Performance Monitoring
- Track app startup time
- Monitor network request performance

### User Analytics
- Firebase Analytics configured
- Track user engagement and retention
- Monitor conversion funnels

## Store Preparation

### App Store Listing
- Prepare high-quality screenshots (all device sizes)
- Write compelling app descriptions
- Create promotional graphics
- Plan ASO (App Store Optimization) keywords

### Required Information
- Privacy Policy URL: `https://yourapp.com/privacy-policy`
- Terms of Service URL: `https://yourapp.com/terms-of-service`
- Support Email: `support@padelo.com`
- App Category: Sports
- Content Rating: Appropriate for all ages

## Testing

### Automated Testing
```bash
# Web app tests
cd client && pnpm test

# Flutter tests
flutter test
```

### Manual Testing
- Test on multiple device sizes and OS versions
- Verify all legal document flows
- Test policy acceptance during registration
- Verify role-based access controls
- Test offline functionality

## Post-Deployment

### Monitoring
- Set up uptime monitoring
- Configure error alerting
- Monitor app store reviews
- Track user feedback

### Updates
- Plan regular feature releases
- Monitor policy compliance requirements
- Update legal documents as needed
- Keep dependencies updated for security

## Support and Maintenance

### User Support
- Set up help desk or support system
- Create FAQ documentation
- Monitor social media channels
- Respond to app store reviews

### Maintenance Schedule
- Weekly: Security updates
- Monthly: Dependency updates
- Quarterly: Feature releases
- Annually: Legal document reviews

## Legal Compliance Checklist

- ✅ Privacy Policy implemented and accessible
- ✅ Terms of Service implemented and accessible
- ✅ User consent tracking with timestamps
- ✅ Policy version tracking
- ✅ Easy access to policies from profile settings
- ✅ Mandatory acceptance during registration
- ⚠️ Implement data export functionality (GDPR compliance)
- ⚠️ Implement data deletion functionality (Right to be forgotten)
- ⚠️ Consider cookie consent for web app (EU compliance)

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Flutter/Node.js versions
   - Clear build caches: `flutter clean && flutter pub get`
   - Verify all environment variables are set

2. **Firebase Connection Issues**
   - Verify configuration files are in correct locations
   - Check bundle IDs match Firebase project
   - Ensure APIs are enabled in Google Cloud Console

3. **App Store Rejections**
   - Verify privacy policy and terms are accessible
   - Ensure app doesn't crash on startup
   - Check for proper user consent flows

## Contact Information

For deployment support or questions:
- Technical Support: `tech@padelo.com`
- Privacy Inquiries: `privacy@padelo.com`
- General Support: `support@padelo.com`

## Version History

- v1.0.0: Initial release with privacy policy integration
- v1.0.1: Bug fixes and performance improvements
- v1.1.0: Enhanced user roles and permissions

---

This deployment guide ensures your Padelo app is ready for production with all legal requirements met and proper user consent flows implemented.
