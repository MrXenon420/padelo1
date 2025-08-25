# Padelo Native Mobile App Build Instructions

## 🚀 Convert Your Web App to Native Mobile Apps

Your Padelo web app will be converted to **real native iOS and Android applications** that can be submitted to app stores.

## Prerequisites

1. **Node.js and npm** (already installed)
2. **Android Studio** (for Android app)
3. **Xcode** (for iOS app - macOS only)

## Step 1: Install Capacitor Dependencies

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios @capacitor/splash-screen @capacitor/status-bar @capacitor/keyboard @capacitor/haptics @capacitor/network @capacitor/device
```

## Step 2: Initialize Capacitor

```bash
npx cap init "Padelo" "com.padelo.app"
```

## Step 3: Build Web App and Add Platforms

```bash
# Build the web app
npm run build

# Add Android platform
npx cap add android

# Add iOS platform (macOS only)
npx cap add ios

# Sync web app to native platforms
npx cap sync
```

## Step 4: Open and Build Native Apps

### For Android App:
```bash
# Open Android Studio
npx cap open android
```

In Android Studio:
1. Wait for Gradle sync to complete
2. Click "Build" > "Build Bundle(s) / APK(s)" > "Build APK(s)"
3. Or click "Build" > "Generate Signed Bundle / APK" for store upload

### For iOS App (macOS only):
```bash
# Open Xcode
npx cap open ios
```

In Xcode:
1. Select "Any iOS Device" as target
2. Product > Archive
3. Upload to App Store Connect

## Step 5: Test on Real Devices

### Android Testing:
```bash
# Run on connected Android device
npx cap run android
```

### iOS Testing:
```bash
# Run on connected iOS device
npx cap run ios
```

## Quick Build Commands

```bash
# Build for Android
npm run build:android

# Build for iOS  
npm run build:ios

# Build and open Android Studio
npm run cap:android

# Build and open Xcode
npm run cap:ios
```

## App Store Submission

### Google Play Store:
1. Build signed APK/AAB in Android Studio
2. Upload to Google Play Console
3. Fill out store listing with app description
4. Submit for review

### Apple App Store:
1. Archive and upload via Xcode
2. Add app metadata in App Store Connect
3. Submit for review

## App Features

Your native apps will have:
- ✅ **Native performance** and feel
- ✅ **App store submission ready**
- ✅ **Offline capability**
- ✅ **Native splash screen**
- ✅ **Status bar styling**
- ✅ **Keyboard handling**
- ✅ **Haptic feedback**
- ✅ **Network detection**
- ✅ **Device information access**

## Troubleshooting

### Common Issues:
1. **Build fails**: Run `npx cap sync` after making changes
2. **White screen**: Check console for JavaScript errors
3. **Permissions**: Add required permissions to AndroidManifest.xml or Info.plist

### Debug Commands:
```bash
# Check Capacitor configuration
npx cap doctor

# View device logs
npx cap run android --livereload
npx cap run ios --livereload
```

## File Structure After Setup

```
your-project/
├── android/          # Android native project
├── ios/              # iOS native project  
├── dist/             # Built web app
├── capacitor.config.ts
└── src/              # Your React source code
```

## Performance Tips

1. **Optimize images** - Use WebP format when possible
2. **Minimize JavaScript** - Already configured in vite.config.ts
3. **Use lazy loading** - For better startup performance
4. **Test on real devices** - Emulators may not show true performance

Your Padelo app will be indistinguishable from a native app once built! 📱
