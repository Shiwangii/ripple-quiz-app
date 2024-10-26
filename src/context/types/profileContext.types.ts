export type AvatarDataType = {
    _id: string;
    avatarURL: string;
  }
  
  export type ProfileCtxType = {
    profileActiveTab: string;
    setProfileActiveTab: any;
    avatarsData:  Array<AvatarDataType>;
  }