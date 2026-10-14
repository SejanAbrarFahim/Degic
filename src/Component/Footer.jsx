import React from 'react'
import { Facebook, Twitter, Instagram } from '@mui/icons-material'
import { Box, Container, Typography, Link, IconButton } from '@mui/material'

function Footer() {
  const footerData = [
    {
      title: 'Home',
      links: ['Become Affiliate', 'Go Unlimited', 'Services'],
    },
    {
      title: 'Products',
      links: ['Design Systems', 'Themes & Templates', 'Mockups', 'Presentations', 'Wireframes Kits', 'UI Kits'],
    },
    {
      title: 'Legals',
      links: ['License', 'Refund Policy', 'About Us', 'Contacts'],
    },
    {
      title: 'Blog',
      links: ['Business Stories', 'Digital Store', 'Learning'],
    },
  ]

  const socialIcons = [
    { icon: <Facebook fontSize="small" />, href: '#' },
    { icon: <Instagram fontSize="small" />, href: '#' },
    { icon: <Twitter fontSize="small" />, href: '#' },
  ]

  return (
    <Box component="footer" sx={{ bgcolor: '#000', color: '#fff', pt: 8, pb: 3 }}>
      <Container maxWidth="lg">
        {/* Top part: logo + 4 link columns (CSS grid, MUI version er upor depend kore na) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr 1fr',
              md: '2fr repeat(4, 1fr)',
            },
            columnGap: 4,
            rowGap: 5,
          }}
        >
          {/* Logo */}
          <Box sx={{ gridColumn: { xs: '1 / -1', md: 'auto' } }}>
            <Box component="img" src="/degicLogo.png" alt="Degic" sx={{ height: 80, width: 'auto' }} />
          </Box>

          {/* Link columns */}
          {footerData.map((section) => (
            <Box key={section.title}>
              <Typography sx={{ fontSize: 16, fontWeight: 500, color: '#fff', mb: 2 }}>
                {section.title}
              </Typography>

              {/* Link gulo vertical stack korar jonno flex column */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {section.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    underline="none"
                    sx={{
                      color: '#8a8a8a',
                      fontSize: 14,
                      lineHeight: '20px',
                      transition: 'color .2s',
                      '&:hover': { color: '#fff' },
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Divider */}
        <Box sx={{ borderTop: '1px solid #222', mt: 6 }} />

        {/* Bottom part: copyright + social icons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
            pt: 3,
          }}
        >
          <Typography sx={{ color: '#8a8a8a', fontSize: 14 }}>
            Copyright Degic © 2020
          </Typography>

          <Box sx={{ display: 'flex', gap: 1.2 }}>
            {socialIcons.map((social, index) => (
              <IconButton
                key={index}
                href={social.href}
                sx={{
                  bgcolor: '#151515',
                  color: '#fff',
                  width: 40,
                  height: 40,
                  '&:hover': { bgcolor: '#2a2a2a' },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer