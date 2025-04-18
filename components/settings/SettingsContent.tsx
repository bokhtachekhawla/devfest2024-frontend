import { ProfileSection } from '@/components/settings/ProfileSection';
import { SettingsMenu } from '@/components/settings/SettingsMenu';

const Settings: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Profile Section */}
      <div className="lg:col-span-2">
        <ProfileSection/>
      </div>

      {/* Settings Menu */}
      <div>
        <SettingsMenu />
      </div>
    </div>
  );
};

export default Settings;
