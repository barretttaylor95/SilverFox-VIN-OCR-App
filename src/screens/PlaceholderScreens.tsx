const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  iconText: {
    fontSize: 64,
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  description: {
    fontSize: typography.fontSize.lg,
    color: colors.gray600,
    textAlign: 'center',
    lineHeight: typography.lineHeight.lg,
    marginTop: spacing.md,
  },
  vinText: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    marginVertical: spacing.md,
    textAlign: 'center',
  },
confidenceText: {
    fontSize: typography.fontSize.md,
    color: colors.success,
    textAlign: 'center',
  },
});