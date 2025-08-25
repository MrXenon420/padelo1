# Padelo - Build Instructions for Store Upload

## Prerequisites

1. **Flutter SDK** - Latest stable version
2. **Android Studio** - For Android builds
3. **Xcode** (macOS only) - For iOS builds
4. **Developer Accounts**:
   - Google Play Console account
   - Apple Developer Program account

## Android Build for Google Play Store

### Step 1: Generate Upload Key
```bash
keytool -genkey -v -keystore upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

### Step 2: Configure Key Properties
Create `android/key.properties`:
```
storePassword=your_keystore_password
keyPassword=your_key_password  
keyAlias=upload
storeFile=../upload-keystore.jks
```

### Step 3: Build Release APK
```bash
flutter build apk --release
```

### Step 4: Build App Bundle (Recommended)
```bash
flutter build appbundle --release
```

**Output files:**
- APK: `build/app/outputs/flutter-apk/app-release.apk`
- AAB: `build/app/outputs/bundle/release/app-release.aab`

## iOS Build for App Store

### Step 1: Open in Xcode
```bash
open ios/Runner.xcworkspace
```

### Step 2: Configure Bundle Identifier
- Set bundle ID: `com.padelo.app`
- Configure signing with your developer account
- Set deployment target: iOS 12.0+

### Step 3: Build for Release
```bash
flutter build ios --release
```

### Step 4: Archive in Xcode
1. Select "Any iOS Device" as target
2. Product → Archive
3. Upload to App Store Connect

## App Icon Generation

### Install Icons
```bash
flutter packages pub run flutter_launcher_icons:main
```

### Custom Icons Required
- `assets/icons/app_icon.png` (1024x1024)
- `assets/icons/app_icon_foreground.png` (432x432 transparent)

## Testing Before Release

### Android Testing
```bash
# Debug build
flutter run --debug

# Release build testing
flutter run --release
```

### iOS Testing
```bash
# iOS Simulator
flutter run -d "iPhone 15"

# iOS Device
flutter run -d "Your iPhone"
```

## Store Upload Checklist

### Google Play Store
- [ ] Upload AAB file to Google Play Console
- [ ] Add app listing details from STORE_LISTING.md
- [ ] Upload screenshots (5 different screens)
- [ ] Set content rating (Everyone)
- [ ] Configure pricing (Free)
- [ ] Add privacy policy URL
- [ ] Test on internal testing track first

### Apple App Store
- [ ] Upload build via Xcode or App Store Connect
- [ ] Add app metadata in App Store Connect
- [ ] Upload screenshots for all device sizes
- [ ] Set age rating (4+)
- [ ] Configure pricing (Free)
- [ ] Add privacy policy and support URLs
- [ ] Submit for App Store Review

## Release Configuration

### Version Bumping
Update `pubspec.yaml`:
```yaml
version: 1.0.1+2  # version+build_number
```

### Build Commands
```bash
# Clean previous builds
flutter clean
flutter pub get

# Android Release
flutter build appbundle --release --target-platform android-arm,android-arm64,android-x64

# iOS Release  
flutter build ios --release --no-codesign
```

## Troubleshooting

### Common Android Issues
- **Signing errors**: Check key.properties file
- **Build errors**: Run `flutter clean` and `flutter pub get`
- **ProGuard issues**: Check proguard-rules.pro

### Common iOS Issues
- **Signing errors**: Check bundle ID and certificates in Xcode
- **Archive errors**: Clean build folder in Xcode
- **Deployment target**: Ensure iOS 12.0+ minimum

## Store Approval Tips

### Google Play Store
- Test on multiple Android devices
- Ensure app doesn't crash on startup
- Provide clear app description
- Include privacy policy

### Apple App Store
- Follow iOS Human Interface Guidelines
- Test on iPhone and iPad
- Provide detailed app description
- Include privacy policy and data usage details

## Post-Release

### Monitoring
- Check crash reports in Firebase Crashlytics
- Monitor user reviews and ratings
- Track app performance metrics

### Updates
- Regular feature updates
- Bug fixes based on user feedback
- Version updates through same build process

## Contact & Support
For build issues or questions, refer to:
- Flutter documentation: https://flutter.dev/docs
- Google Play Console Help
- Apple Developer Documentation
